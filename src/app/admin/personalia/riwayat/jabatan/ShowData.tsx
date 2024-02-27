/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useRiwayatJabatan from "@/stores/crud/personalia/RiwayatJabatan";
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
  const { setRiwayatJabatan, dtRiwayatJabatan } = useRiwayatJabatan();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jenis, setJenis] = useState<string>("");

  const { role } = useContext(RoleContext);

  const fetchDataRiwayatJabatan = async () => {
    const res = await setRiwayatJabatan({
      page,
      limit,
      search,
      jenis,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataRiwayatJabatan();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataRiwayatJabatan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Nama", "Jabatan", "Mulai", "Selesai", "Aksi"];
  const tableBodies = ["pegawai.nama", "jabatan.nama", "mulai", "seles"];

  role !== "personalia" && headTable.splice(5);
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
              dataTable={dtRiwayatJabatan.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={role === "personalia" && true}
              hapus={role === "personalia" && true}
            />
          </div>
          {dtRiwayatJabatan?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtRiwayatJabatan?.current_page}
                totalPages={dtRiwayatJabatan?.last_page}
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
