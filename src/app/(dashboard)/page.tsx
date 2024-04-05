/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-main bg-cover bg-bottom flex flex-col font-vidaloka">
      <div className="h-full grow w-full flex flex-col justify-center items-center gap-20">
        {/* asset */}
        <div className="mt-10 mx-2 bg-gradient-to-r from-primary via-black to-secondary text-transparent bg-clip-text animate-blink">
          <h2 className="text-center text-2xl md:text-3xl">
            Selamat datang di website
          </h2>
          <h1 className="text-center text-3xl md:text-5xl">Biro Umum</h1>
        </div>
        <div className="flex flex-col gap-6 md:flex-row animate-blink">
          <div className="relative h-56 w-80 rounded-lg cursor-pointer shadow-xl backdrop-blur-sm bg-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="bg-gradient-to-r from-primary via-black to-secondary text-transparent bg-clip-text">
                Asset
              </h3>
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
            href="/sdm"
            className="relative h-56 w-80 rounded-lg cursor-pointer shadow-xl backdrop-blur-sm bg-white/10"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="bg-gradient-to-r from-primary via-black to-secondary text-transparent bg-clip-text">
                SDM
              </h3>
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
