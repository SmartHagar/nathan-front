/** @format */
"use client";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { PegawaiContext } from "@/context/pegawaiContext";

type Props = {};

const Dashboard = (props: Props) => {
  const { showPegawai } = useContext(PegawaiContext);
  return <div>Selamat datang {showPegawai?.nama}</div>;
};

export default Dashboard;
