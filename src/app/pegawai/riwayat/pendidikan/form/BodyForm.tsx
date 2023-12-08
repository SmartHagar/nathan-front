/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
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
  mulai: Date | string;
  setMulai: (data: Date | string) => void;
  seles: Date | string;
  setSeles: (data: Date | string) => void;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  mulai,
  setMulai,
  seles,
  setSeles,
}) => {
  const { setPegawai, dtPegawai } = usePegawaiApi();

  // memanggil data pegawai
  const fetchDataPegawai = async ({ search }: any) => {
    await setPegawai({
      search,
      tipe: "dosen",
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
      <SelectDefault
        label="Jenjang"
        name="jenjang"
        options={[
          {
            label: "SD",
            value: "SD",
          },
          {
            label: "SMP",
            value: "SMP",
          },
          {
            label: "SMA/SMK",
            value: "SMA/SMK",
          },
          {
            label: "D3",
            value: "D3",
          },
          {
            label: "S1",
            value: "S1",
          },
          {
            label: "S2",
            value: "S2",
          },
          {
            label: "S3",
            value: "S3",
          },
        ]}
        register={register}
        addClass="col-span-4 lg:col-span-1"
        defaultOption="Pilih"
        required
        errors={errors.jenjang}
      />
      <InputTextDefault
        label="Instansi"
        name="instansi"
        register={register}
        required
        minLength={3}
        errors={errors.instansi}
        addClass="col-span-4 lg:col-span-3"
      />
      <InputDate
        label="Masuk"
        name="mulai"
        control={control}
        startDate={mulai}
        setStartDate={setMulai}
        required
        errors={errors.mulai}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputDate
        label="Selesai"
        name="seles"
        control={control}
        startDate={seles}
        setStartDate={setSeles}
        required
        errors={errors.seles}
        addClass="col-span-4 lg:col-span-2"
      />
    </>
  );
};

export default BodyForm;
