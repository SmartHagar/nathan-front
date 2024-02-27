/** @format */
"use client";
import React, { useContext, useEffect, useState } from "react";

import ShowData from "./ShowData";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import Form from "./form/Form";
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSerch";
import { PegawaiContext } from "@/context/pegawaiContext";
import useDokumen from "@/stores/crud/personalia/DokumenPegawai";
import Cookies from "js-cookie";
import { RoleContext } from "@/context/roleContext";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Dokumen = ({ params }: { params: { tipe: string } }) => {
  // context pegawai
  const { showPegawai } = useContext(PegawaiContext);
  // store
  const { removeData } = useDokumen();
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");

  const { role } = useContext(RoleContext);

  const handleTambah = () => {
    setShowModal(true);
    setDtEdit(null);
  };

  const setEdit = (row: any) => {
    setShowModal(true);
    setDtEdit(row);
  };

  const setDelete = async ({ id, isDelete }: Delete) => {
    setIdDel(id);
    if (isDelete) {
      const { data } = await removeData(idDel);
      toastShow({
        event: data,
      });
      setShowDelete(false);
    } else setShowDelete(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
        <Form
          dtEdit={dtEdit}
          showModal={showModal}
          setShowModal={setShowModal}
          tipe={params.tipe}
        />
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
        {role === "personalia" && (
          <div className="mb-4 flex justify-between">
            <p className="capitalize">
              Silahkan Mengolah data Dokumen {params.tipe}
            </p>
            <div>
              <ButtonPrimary text="Tambah Dokumen" onClick={handleTambah} />
            </div>
          </div>
        )}
        <InputTextSearch
          placeholder="Cari Dokumen"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData
        setDelete={setDelete}
        setEdit={setEdit}
        search={search}
        tipe={params.tipe}
      />
    </div>
  );
};

export default Dokumen;
