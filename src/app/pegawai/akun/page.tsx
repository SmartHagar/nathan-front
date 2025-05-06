/** @format */
import React from "react";
import Form from "./form/Form";
import { Toaster } from "react-hot-toast";
import useLogin from "@/stores/auth/login";

type Props = {};

const Akun = (props: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="mb-4">
        <p>
          Silahkan mengubah data akun anda pada form dibawah ini. Masukanlah
          email dan password yang baru jika anda ingin mengubahnya.
        </p>
      </div>
      <Toaster />
      <div className="lg:mx-10">
        {" "}
        <Form />
      </div>
    </div>
  );
};

export default Akun;
