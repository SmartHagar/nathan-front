/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { PegawaiContext } from "@/context/pegawaiContext";
import { RoleContext } from "@/context/roleContext";
import usePegawaiApi from "@/stores/api/Pegawai";
import useDokumen from "@/stores/crud/personalia/DokumenPegawai";
import React, { FC, useContext, useEffect, useState } from "react";

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
  // context pegawai
  const { setDokumen, dtDokumen } = useDokumen();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { role } = useContext(RoleContext);

  const fetchDataDokumen = async () => {
    const res = await setDokumen({
      page,
      search,
      limit,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataDokumen();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataDokumen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Nama", "Judul", "Gambar / File", "Aksi"];
  const tableBodies = ["pegawai.nama", "judul", "gambar"];

  role !== "personalia" && headTable.splice(4);
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
              dataTable={dtDokumen.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={role === "personalia" && true}
              hapus={role === "personalia" && true}
            />
          </div>
          {dtDokumen?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtDokumen?.current_page}
                totalPages={dtDokumen?.last_page}
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
