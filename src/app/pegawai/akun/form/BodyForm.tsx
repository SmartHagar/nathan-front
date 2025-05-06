/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import React, { FC } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  control: any;
  watch: any;
  setValue: any;
  dtLogin: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  watch,
  setValue,
  dtLogin,
}) => {
  return (
    <>
      <InputTextDefault
        label="Email"
        name="email"
        register={register}
        required
        minLength={3}
        errors={errors.email}
        type="email"
        addClass="col-span-4 lg:col-span-3"
      />
      <InputTextDefault
        label="Password"
        name="password"
        register={register}
        required
        minLength={3}
        errors={errors.password}
        type="password"
        addClass="col-span-4 lg:col-span-3"
      />
      <InputTextDefault
        label="Konfirmasi Password"
        name="confirmPwd"
        register={register}
        required
        minLength={3}
        errors={errors.confirmPwd}
        type="password"
        addClass="col-span-4 lg:col-span-3"
      />
    </>
  );
};

export default BodyForm;
