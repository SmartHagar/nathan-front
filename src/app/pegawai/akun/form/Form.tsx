/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import useLogin from "@/stores/auth/login";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {};

type Inputs = {
  email: string;
  password: string;
  confirmPwd: string;
};

const Form = ({}: Props) => {
  // store
  const { cekToken, dtLogin } = useLogin();
  useEffect(() => {
    cekToken();

    return () => {};
  }, [cekToken]);

  // load
  const [saveLoad, setSaveLoad] = useState(false);
  // store
  const { setUpdate } = useLogin();
  const formSchema = yup.object().shape({
    password: yup.string().min(3, "Password harus lebih dari 3 karakter"),
    confirmPwd: yup
      .string()
      .oneOf([yup.ref("password")], "Konfirmasi Password tidak sama"),
    email: yup.string().email("Email tidak valid"),
  });

  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<Inputs>({ resolver: yupResolver(formSchema) as any });

  const resetForm = () => {
    setValue("email", dtLogin?.user?.email);
    setValue("password", "");
    setValue("confirmPwd", "");
  };

  useEffect(() => {
    resetForm();
  }, [dtLogin]);

  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    const id = dtLogin?.user?.id;
    setSaveLoad(true);
    console.log({ row });
    // return;
    const { data } = await setUpdate(id, row);
    console.log({ data });
    toastShow({
      event: data,
    });
    data?.type !== "success" ? null : resetForm();
    cekToken();

    setTimeout(() => {
      setSaveLoad(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTextDefault name="id" register={register} type="hidden" />

      <div className="grid grid-cols-1 gap-2 mb-4">
        <BodyForm
          register={register}
          errors={errors}
          control={control}
          watch={watch}
          setValue={setValue}
          dtLogin={dtLogin}
        />
      </div>
      <div>
        {saveLoad ? (
          <LoadingSpiner />
        ) : (
          <ButtonPrimary text="Simpan" onClick={handleSubmit(onSubmit)} />
        )}
      </div>
    </form>
  );
};

export default Form;
