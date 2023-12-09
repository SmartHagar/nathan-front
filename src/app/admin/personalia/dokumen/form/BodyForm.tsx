/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import usePegawaiApi from "@/stores/api/Pegawai";
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
  myFile: any;
  setMyFile: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  myFile,
  setMyFile,
}) => {
  const { setPegawai, dtPegawai } = usePegawaiApi();
  // memanggil data pegawai
  const fetchDataPegawai = async ({ search }: any) => {
    await setPegawai({
      search,
    });
  };

  useEffect(() => {
    fetchDataPegawai({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtPegawai?.data && (
        <SelectFromDb
          label="Pegawai"
          placeholder="Pilih Pegawai"
          name="pegawai_id"
          dataDb={dtPegawai?.data}
          body={["id", "NIK", "nama"]}
          control={control}
          required
          errors={errors.pegawai_id}
          addClass="col-span-4"
        />
      )}
      <InputTextDefault
        label="Judul"
        name="judul"
        register={register}
        required
        minLength={3}
        errors={errors.judul}
        addClass="col-span-4"
      />
      <InputFile
        label="Gambar"
        name="gambar"
        register={register}
        accept="image/*, .pdf"
        required
        errors={errors.gambar}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.gambar}
        myFile={myFile}
        setMyFile={setMyFile}
      />
    </>
  );
};

export default BodyForm;
