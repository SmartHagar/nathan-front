/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import React, { FC, useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import SelectFromDb from "@/components/select/SelectFromDB";
import usePekerjaanApi from "@/stores/api/Pekerjaan";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
}) => {
  const { setMasihKerja, dtPekerjaan } = usePekerjaanApi();
  // memanggil data pekerjaan
  const fetchDataPekerjaan = async ({ search }: any) => {
    await setMasihKerja({
      search,
    });
  };
  useEffect(() => {
    fetchDataPekerjaan({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtPekerjaan?.data && (
        <SelectFromDb
          label="Pekerjaan Alumni"
          placeholder="Pilih Pekerjaan Alumni"
          name="pekerjaan_id"
          dataDb={dtPekerjaan?.data}
          body={["id", "alumni", "nm_instansi"]}
          control={control}
          required
          errors={errors.pekerjaan_id}
          addClass="col-span-4"
        />
      )}
      <InputTextDefault
        label="Nama Pengguna"
        name="nama"
        register={register}
        required
        minLength={3}
        errors={errors.nama}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Jabatan Pengguna"
        name="jabatan"
        register={register}
        required
        minLength={3}
        errors={errors.jabatan}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Email Pengguna"
        name="email"
        register={register}
        required
        minLength={3}
        type="email"
        errors={errors.email}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="No. Hp Pengguna"
        name="no_hp"
        register={register}
        required
        minLength={3}
        errors={errors.no_hp}
        addClass="col-span-4 lg:col-span-2"
      />
    </>
  );
};

export default BodyForm;
