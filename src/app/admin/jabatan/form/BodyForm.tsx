/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import React, { FC } from "react";

import "react-datepicker/dist/react-datepicker.css";

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
  return (
    <>
      <SelectDefault
        label="Jenis Jabatan"
        name="jenis"
        options={[
          {
            label: "Fungsional",
            value: "fungsional",
          },
          {
            label: "Struktural",
            value: "struktural",
          },
        ]}
        register={register}
        addClass="col-span-4 lg:col-span-1"
        defaultOption="Pilih"
        required
        errors={errors.jenis}
      />

      <InputTextDefault
        label="Jabatan"
        name="nama"
        register={register}
        required
        minLength={3}
        errors={errors.nama}
        addClass="col-span-4 lg:col-span-3"
      />
    </>
  );
};

export default BodyForm;
