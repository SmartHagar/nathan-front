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
        label="Golongan"
        name="gol"
        options={[
          {
            label: "I (Juru)",
            value: "I (Juru)",
          },
          {
            label: "II (Pengatur)",
            value: "II (Pengatur)",
          },
          {
            label: "III (Penata)",
            value: "III (Penata)",
          },
          {
            label: "IV (Pembina)",
            value: "IV (Pembina)",
          },
        ]}
        register={register}
        addClass="col-span-4 lg:col-span-2"
        defaultOption="Pilih"
        required
        errors={errors.gol}
      />

      <SelectDefault
        label="Ruang"
        name="ruang"
        options={[
          {
            label: "a",
            value: "a",
          },
          {
            label: "b",
            value: "b",
          },
          {
            label: "c",
            value: "c",
          },
          {
            label: "d",
            value: "d",
          },
          {
            label: "e",
            value: "e",
          },
        ]}
        register={register}
        addClass="col-span-4 lg:col-span-2"
        defaultOption="Pilih"
        required
        errors={errors.ruang}
      />

      <InputTextDefault
        label="Pangkat"
        name="pangkat"
        register={register}
        required
        minLength={3}
        errors={errors.pangkat}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
