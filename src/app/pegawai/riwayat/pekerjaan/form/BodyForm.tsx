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
      <InputTextDefault
        label="Jabatan"
        name="jabatan"
        register={register}
        required
        minLength={3}
        errors={errors.jabatan}
        addClass="col-span-4 lg:col-span-2"
      />

      <InputTextDefault
        label="Instansi"
        name="instansi"
        register={register}
        required
        minLength={3}
        errors={errors.instansi}
        addClass="col-span-4 lg:col-span-2"
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
