/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
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
        label="Judul"
        name="judul"
        register={register}
        required
        minLength={3}
        errors={errors.judul}
        addClass="col-span-4"
      />
      <InputFile
        label="File"
        name="file"
        register={register}
        required
        errors={errors.file}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.file}
      />
    </>
  );
};

export default BodyForm;
