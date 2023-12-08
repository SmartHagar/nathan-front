/** @format */
"use client";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { PegawaiContext } from "@/context/pegawaiContext";

type Props = {};

const Dashboard = (props: Props) => {
  const { showPegawai } = useContext(PegawaiContext);
  console.log({ showPegawai });
  return <div>Selamat datang</div>;
};

export default Dashboard;
