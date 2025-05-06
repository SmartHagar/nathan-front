/** @format */
"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { PegawaiContext } from "@/context/pegawaiContext";
import Image from "next/image";
import { BASE_URL } from "@/services/baseURL";
import moment from "moment";
import useRiwayatJabatanApi from "@/stores/api/RiwayatJabatan";
import useRiwayatPendidikanApi from "@/stores/api/RiwayatPendidikan";
import useRiwayatPekerjaanApi from "@/stores/api/RiwayatPekerjaan";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import ButtonSecondary from "@/components/button/ButtonSecondary";
import Form from "./form/Form";
import { Toaster } from "react-hot-toast";

type Props = {};

const Dashboard = (props: Props) => {
  const { showPegawai } = useContext(PegawaiContext);
  const [dtEdit, setDtEdit] = useState<any>();
  const [showModal, setShowModal] = useState(false);
  // store
  const { setRiwayatJabatan, dtRiwayatJabatan } = useRiwayatJabatanApi();
  const { setRiwayatPendidikan, dtRiwayatPendidikan } =
    useRiwayatPendidikanApi();
  const { setRiwayatPekerjaan, dtRiwayatPekerjaan } = useRiwayatPekerjaanApi();

  const fetchDtRiwayatJabatan = async () => {
    await setRiwayatJabatan(showPegawai?.id as number);
  };

  const fetchDtRiwayatPendidikan = async () => {
    await setRiwayatPendidikan(showPegawai?.id as number);
  };

  const fetchDtRiwayatPekerjaan = async () => {
    await setRiwayatPekerjaan(showPegawai?.id as number);
  };

  useMemo(() => {
    fetchDtRiwayatJabatan();
    fetchDtRiwayatPendidikan();
    fetchDtRiwayatPekerjaan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPegawai?.id]);

  const cetakPDF = () => {
    // open link new tab
    window.open(`${BASE_URL}/export/biodata/${showPegawai?.id}`, "_blank");
  };

  const setEdit = (row: any) => {
    setShowModal(true);
    setDtEdit(row);
  };

  return (
    <section className="text-gray-600 body-font h-full overflow-auto">
      <Toaster />
      <Form
        dtEdit={dtEdit}
        showModal={showModal}
        setShowModal={setShowModal}
        tipe={showPegawai?.tipe as string}
      />
      <div className="container mx-auto flex px-5 pt-14 pb-4 md:flex-row flex-col items-center  h-full">
        <div className="lg:max-w-xs md:w-1/2 w-5/6 mb-10 md:mb-0">
          {showPegawai?.foto && (
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={`${BASE_URL}/${showPegawai.foto}`}
              width={300}
              height={100}
            />
          )}
          <div className="mt-2 text-center">
            <ButtonSecondary text="Ubah" onClick={() => setEdit(showPegawai)} />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:text-left h-full">
          <h3 className="">{showPegawai?.nama}</h3>
          <div className=" overflow-auto my-6">
            <table cellPadding={4}>
              <tbody>
                <tr>
                  <td>NIK</td>
                  <td className="pl-2">:</td>
                  <td>{showPegawai?.NIK}</td>
                </tr>
                <tr>
                  <td>Tempat, Tgl. Lahir</td>
                  <td className="pl-2">:</td>
                  <td>
                    {showPegawai?.tempat_lahir},{" "}
                    {moment(showPegawai?.tgl_lahir).format("DD-MM-YYYY")}
                  </td>
                </tr>
                <tr>
                  <td>No. HP</td>
                  <td className="pl-2">:</td>
                  <td>{showPegawai?.no_hp}</td>
                </tr>
                <tr>
                  <td>Jumlah anak</td>
                  <td className="pl-2">:</td>
                  <td>{showPegawai?.jumlah_anak}</td>
                </tr>
                <tr>
                  <td>Jenis Kelamin</td>
                  <td className="pl-2">:</td>
                  <td>{showPegawai?.jenkel}</td>
                </tr>
                <tr>
                  <td>Pendidikan Terakhir</td>
                  <td className="pl-2">:</td>
                  <td>{showPegawai?.pend_terakhir}</td>
                </tr>
                <tr>
                  <td>Alamat</td>
                  <td className="pl-2">:</td>
                  <td>{showPegawai?.alamat}</td>
                </tr>
                <tr>
                  <td>Tahun Masuk</td>
                  <td className="pl-2">:</td>
                  <td>{showPegawai?.thn_terima}</td>
                </tr>
              </tbody>
            </table>
            <h4 className="mt-8 mb-2">Riwayat Jabatan</h4>
            <div>
              {dtRiwayatJabatan &&
                dtRiwayatJabatan?.map((item: any, index: number) => (
                  <div key={index}>
                    <span className="pr-2">{item?.jabatan?.nama}</span>
                    <span>
                      {moment(item?.mulai).format("YYYY")} sampai{" "}
                      {moment(item?.seles).format("YYYY")}
                    </span>
                  </div>
                ))}
            </div>
            <h4 className="mt-8 mb-2">Riwayat Pendidikan</h4>
            <div>
              {dtRiwayatPendidikan &&
                dtRiwayatPendidikan?.map((item: any, index: number) => (
                  <div key={index}>
                    <span className="pr-2">{item?.jenjang}</span>
                    <span className="pr-2">{item?.instansi}</span>
                    <span>
                      {moment(item?.mulai).format("YYYY")} sampai{" "}
                      {moment(item?.seles).format("YYYY")}
                    </span>
                  </div>
                ))}
            </div>
            <h4 className="mt-8 mb-2">Riwayat Pekerjaan</h4>
            <div>
              {dtRiwayatPekerjaan &&
                dtRiwayatPekerjaan?.map((item: any, index: number) => (
                  <div key={index}>
                    <span className="pr-2">{item?.instansi}</span>
                    <span className="pr-2">{item?.jabatan}</span>
                    <span>
                      {moment(item?.mulai).format("YYYY")} sampai{" "}
                      {moment(item?.seles).format("YYYY")}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="">
            <ButtonSecondary text="Cetak" onClick={cetakPDF} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
