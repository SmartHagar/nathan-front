/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-main bg-cover bg-bottom flex flex-col">
      <div className="h-full grow w-full flex flex-col justify-center items-center gap-8">
        {/* asset */}
        <div className="mt-10 text-gray-900">
          <h3 className="text-center">Selamat datang di website</h3>
          <h2 className="text-center">Biro Umum</h2>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative h-56 w-80 rounded-lg cursor-pointer shadow-xl backdrop-blur-sm bg-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className=" ">Asset</h4>
            </div>
            <Image
              alt="logo"
              fill
              src="/images/bg/asset.png"
              className="rounded-lg"
              style={{ opacity: "0", transition: "opacity 0.5s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
          </div>
          {/* ummum */}
          <Link
            href="/auth_sdm"
            className="relative h-56 w-80 rounded-lg cursor-pointer shadow-xl backdrop-blur-sm bg-white/10"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="">SDM</h4>
            </div>
            <Image
              alt="logo"
              fill
              src="/images/bg/sdm.png"
              className="rounded-lg"
              style={{ opacity: "0", transition: "opacity 0.5s ease" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
