/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import usePegawai from "@/stores/crud/personalia/Pegawai";
import React, { FC, useContext, useEffect, useState } from "react";
import ShowUser from "./ShowUser";
import { BsFillPrinterFill, BsInfoCircle } from "react-icons/bs";
import { BASE_URL } from "@/services/baseURL";
import Cookies from "js-cookie";
import { RoleContext } from "@/context/roleContext";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
  search: string;
  tipe: string;
};

const ShowData: FC<Props> = ({ setDelete, setEdit, search, tipe }) => {
  const { setPegawai, dtPegawai } = usePegawai();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [rowData, setRowData] = useState<any>();

  const { role } = useContext(RoleContext);

  const fetchDataPegawai = async () => {
    const res = await setPegawai({
      page,
      limit,
      search,
      tipe,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataPegawai();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataPegawai();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, tipe]);

  // table
  const headTable = [
    "No",
    "NIK",
    "Nama",
    "Golongan",
    "Thn. Terima",
    "Foto",
    "Aksi",
  ];
  role !== "personalia" && headTable.splice(6);
  // push NIDN to headTable index 2
  const tableBodies = ["NIK", "nama", "pangkat_gol_ru", "thn_terima", "foto"];
  tipe === "dosen" &&
    (headTable.splice(2, 0, "NIDN"), tableBodies.splice(1, 0, "NIDN"));

  const cetakPDF = (id: number | string) => {
    // open link new tab
    window.open(`${BASE_URL}/export/biodata/${id}`, "_blank");
  };

  const costume = (row: any) => {
    return (
      <>
        <BsFillPrinterFill
          size={20}
          title="Cetak Biodata"
          className="cursor-pointer hover:text-link"
          onClick={() => cetakPDF(row.id)}
        />
        <BsInfoCircle
          size={20}
          className="cursor-pointer hover:text-link"
          onClick={() => (setRowData(row), setShowModal(true))}
        />
      </>
    );
  };
  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      <ShowUser
        showModal={showModal}
        setShowModal={setShowModal}
        rowData={rowData}
      />
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtPegawai.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={role === "personalia" ? true : false}
              hapus={role === "personalia" ? true : false}
              costume={role === "personalia" && costume}
            />
          </div>
          {dtPegawai?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtPegawai?.current_page}
                totalPages={dtPegawai?.last_page}
                setPage={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShowData;
