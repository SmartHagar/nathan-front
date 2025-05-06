/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useRiwayatPendidikan from "@/stores/crud/personalia/RiwayatPendidikan";
import React, { FC, useContext, useEffect, useState } from "react";
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
};

const ShowData: FC<Props> = ({ setDelete, setEdit, search }) => {
  const { setRiwayatPendidikan, dtRiwayatPendidikan } = useRiwayatPendidikan();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tipe, setTipe] = useState<string>("");

  const { role } = useContext(RoleContext);

  const fetchDataRiwayatPendidikan = async () => {
    const res = await setRiwayatPendidikan({
      page,
      limit,
      search,
      tipe,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataRiwayatPendidikan();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataRiwayatPendidikan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Nama",
    "Jenjang",
    "Instansi",
    "Masuk",
    "Selesai",
    "Aksi",
  ];
  const tableBodies = ["pegawai.nama", "jenjang", "instansi", "mulai", "seles"];
  role !== "personalia" && headTable.splice(6);
  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtRiwayatPendidikan.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={role === "personalia" && true}
              hapus={role === "personalia" && true}
            />
          </div>
          {dtRiwayatPendidikan?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtRiwayatPendidikan?.current_page}
                totalPages={dtRiwayatPendidikan?.last_page}
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
