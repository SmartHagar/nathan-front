/** @format */
"use client";
import React, { useContext, useState } from "react";

import ShowData from "./ShowData";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import Form from "./form/Form";
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSerch";
import useRiwayatPendidikan from "@/stores/crud/personalia/RiwayatPendidikan";
import Cookies from "js-cookie";
import { RoleContext } from "@/context/roleContext";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Pegawai = () => {
  // store
  const { removeData } = useRiwayatPendidikan();
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
        />
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
        {role === "personalia" && (
          <div className="mb-4 flex justify-between">
            <div>
              <p>
                <span className="capitalize">
                  Silahkan Mengolah data pendidikan pegawai
                </span>
              </p>
            </div>
            <div>
              <ButtonPrimary
                addClass="capitalize"
                text={`Tambah Pendidikan`}
                onClick={handleTambah}
              />
            </div>
          </div>
        )}
        <InputTextSearch
          placeholder="Cari Pegawai"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData setDelete={setDelete} setEdit={setEdit} search={search} />
    </div>
  );
};

export default Pegawai;
