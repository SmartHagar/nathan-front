/** @format */
"use client";

import React, { FC, useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";

type Props = {
  label?: string;
  register: any;
  required?: boolean;
  name: string;
  minLength?: number;
  maxLength?: number;
  errors?: any;
  valueAsNumber?: boolean;
  type?: "text" | "password" | "number" | "email" | "hidden";
  readOnly?: boolean;
  placeholder?: string;
  autoComplete?: string;
  addClass?: string;
  value?: string | number;
  defaultValue?: string;
};

const InputTextDefault: FC<Props> = ({
  label,
  register,
  required,
  name,
  minLength,
  maxLength,
  errors,
  valueAsNumber,
  type = "text",
  readOnly,
  placeholder,
  autoComplete = "on",
  addClass,
  value,
  defaultValue,
}) => {
  const [isTypePassword, setIsTypePassword] = useState(false);
  const tooglePassword = () => {
    setIsTypePassword(!isTypePassword);
  };
  return (
    <div className={addClass}>
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 tracking-wide"
      >
        {label}
      </label>
      {required && <span className="ml-1 text-red-600">*</span>}
      <div className="relative">
        <input
          className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
          type={
            type === "password" ? (isTypePassword ? "text" : "password") : type
          }
          id={name}
          readOnly={readOnly}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name, {
            required,
            minLength,
            maxLength,
            valueAsNumber,
          })}
          value={value}
          defaultValue={defaultValue}
        />
        {type === "password" && (
          <div
            className="absolute right-2 top-0 flex items-center h-full cursor-pointer text-blue-600"
            onClick={tooglePassword}
          >
            {isTypePassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
          </div>
        )}
      </div>
      {/* jika type password */}
      {errors?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kosong
        </p>
      )}
      {errors?.type === "minLength" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kurang dari {minLength} karakter
        </p>
      )}
      {errors?.type === "maxLength" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh lebih dari {maxLength} karakter
        </p>
      )}
      {errors?.type === "pattern" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} hanya boleh angka.
        </p>
      )}
      {errors?.message && (
        <p className="text-red-500 font-inter italic text-sm">
          {errors?.message}.
        </p>
      )}
    </div>
  );
};

export default InputTextDefault;
