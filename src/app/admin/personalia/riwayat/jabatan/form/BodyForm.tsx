/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import SelectTahun from "@/components/select/SelectTahun";
import useJabatanApi from "@/stores/api/Jabatan";
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
  const { setJabatan, dtJabatan } = useJabatanApi();

  // memanggil data pegawai
  const fetchDataPegawai = async ({ search }: any) => {
    await setPegawai({
      search,
      tipe: "dosen",
    });
  };
  // memanggil data jabatan
  const fetchDataJabatan = async ({ search }: any) => {
    await setJabatan({
      search,
    });
  };
  useEffect(() => {
    fetchDataPegawai({});
    fetchDataJabatan({});
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
      {dtJabatan?.data && (
        <SelectFromDb
          label="Jabatan"
          placeholder="Pilih Jabatan"
          name="jabatan_id"
          dataDb={dtJabatan?.data}
          body={["id", "nama"]}
          control={control}
          required
          errors={errors.jabatan_id}
          addClass="col-span-4"
        />
      )}
      <InputDate
        label="Mulai"
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
        addClass="col-span-4 lg:col-span-2"
      />
    </>
  );
};

export default BodyForm;
