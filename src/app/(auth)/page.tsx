/** @format */
"use client";
import useLogin from "@/stores/auth/login";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import FormLogin from "./FormLogin";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import Image from "next/image";

type Inputs = {
  email: string;
  password: string | number;
};

type Props = {};

const Login = (props: Props) => {
  // store
  const { setLogin, cekToken } = useLogin();
  const router = useRouter();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // jika sudah login
  const fetchAuth = async () => {
    const token = Cookies.get("token");
    if (token) {
      const cekAuth = await cekToken();
      console.log({ cekAuth });
      if (!cekAuth?.error) {
        const role = cekAuth?.data?.data?.hak;
        // redirect to login
        router.push(`/${role}`);
      }
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchAuth();
    }
  }, []);

  // hook form
  const {
    register,
    setValue,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    setIsLoading(true);
    setError("");
    const res = await setLogin(row);
    if (res?.error) {
      setError(res?.error?.pesan);
    } else {
      const { data } = res;
      console.log({ data });
      Cookies.set("token", data.token);
      Cookies.set("role", data.hak);
      Cookies.set("user_id", data.id);
      router.push(data.hak);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-login bg-cover bg-center">
      <div className="flex flex-col items-center min-h-screen justify-center z-10">
        <div className="bg-white/20 w-[35rem] backdrop-blur-sm rounded py-8 px-4 md:py-8 md:px-12 flex flex-col items-center justify-center z-50">
          <div className="w-full mb-2">
            <h3 className="text-2xl font-bold text-center">
              Selamat datang di
            </h3>
            <h3 className="text-3xl font-bold text-center">
              Aplikasi Biro SDM
            </h3>

            <span>
              {error && <p className="text-red-600 text-center">{error}</p>}
            </span>
          </div>
          <div className="rounded-full h-32 w-32 relative">
            <Image src="/images/admin.png" alt="logo" fill />
          </div>
          <p className="text-center mt-2 text-sm text-gray-500">
            Silakan login untuk mendapatkan akses ke halaman admin
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full">
            <FormLogin
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              setValue={setValue}
            />
            <div className="mt-4">
              {isLoading ? (
                <LoadingSpiner />
              ) : (
                <ButtonPrimary text="Login" onClick={handleSubmit(onSubmit)} />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
