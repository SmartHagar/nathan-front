/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
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
      <InputTextDefault
        label="Jenis Surat"
        name="nama"
        register={register}
        required
        minLength={3}
        errors={errors.nama}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
