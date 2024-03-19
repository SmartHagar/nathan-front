/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import usePegawaiApi from "@/stores/api/Pegawai";
import AnimatedNumber from "@/components/animated/AnimatedNumber";
import { config } from "@react-spring/web";
type Props = {};

function Dashboard({}: Props) {
  const [role, setRole] = useState("");
  // store
  const { setTotalTipe, dtPegawai } = usePegawaiApi();

  useEffect(() => {
    const role = Cookies.get("role") || "";
    setRole(role);
    setTotalTipe();
    return () => {};
  }, []);

  console.log({ dtPegawai });

  return (
    <div>
      <h5>
        Selamat datang <span className="capitalize">{role}</span>
      </h5>
      <div className="flex md:flex-row flex-col gap-2 mt-4 items-center md:justify-center">
        {dtPegawai?.map((item: any, index: number) => (
          // card
          <div
            key={index}
            className="flex flex-col gap-2 gap-y-6 items-center bg-primary/10 p-2 rounded-lg w-40 h-36 justify-center"
          >
            <p className="capitalize text-xl">{item.tipe}</p>
            {/* number */}
            <AnimatedNumber
              endValue={item.total}
              addClass="text-2xl font-bold"
              animationConfig={config.slow}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
