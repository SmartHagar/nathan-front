/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useJenisApi from "@/stores/api/Jenis";
import React, { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  tglSurat: Date | string;
  setTglSurat: any;
  
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  tglSurat,
  setTglSurat,
}) => {
  const { setJenis, dtJenis } = useJenisApi();
  // memanggil data jenis
  const fetchDataJenis = async ({ search }: any) => {
    await setJenis({
      search,
    });
  };
  useEffect(() => {
    fetchDataJenis({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtJenis?.data && (
        <SelectFromDb
          label="Jenis Surat"
          placeholder="Pilih Jenis Surat"
          name="jenis_id"
          dataDb={dtJenis?.data}
          body={["id", "nama"]}
          control={control}
          required
          errors={errors.jenis_id}
          addClass="col-span-4"
        />
      )}
      <InputTextDefault
        label="No. Surat"
        name="no_surat"
        register={register}
        required
        minLength={3}
        errors={errors.no_surat}
        addClass="col-span-4"
      />
      <InputDate
        name="tgl_surat"
        control={control}
        startDate={tglSurat}
        setStartDate={setTglSurat}
        label="Tgl. Surat"
        required
        errors={errors.tgl_surat}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Dari Ke"
        name="dari_ke"
        register={register}
        required
        minLength={3}
        errors={errors.dari_ke}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="Hal"
        name="hal"
        register={register}
        required
        minLength={3}
        errors={errors.hal}
        addClass="col-span-4"
      />
      <InputFile
        label="Gambar Surat"
        name="gambar"
        register={register}
        accept="image/*"
        required
        errors={errors.gambar}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.gambar}
      />
    </>
  );
};

export default BodyForm;
