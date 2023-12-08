/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { PegawaiContext } from "@/context/pegawaiContext";
import useRiwayatJabatan from "@/stores/crud/personalia/RiwayatJabatan";
import React, { FC, useContext, useEffect, useState } from "react";

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
  // context pegawai
  const { showPegawai } = useContext(PegawaiContext);
  const { setShowRiwayatJabatan, dtRiwayatJabatan } = useRiwayatJabatan();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataRiwayatJabatan = async () => {
    await setShowRiwayatJabatan(showPegawai?.id as number);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataRiwayatJabatan();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, showPegawai?.id]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataRiwayatJabatan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Nama", "Jabatan", "Mulai", "Selesai", "Aksi"];
  const tableBodies = ["pegawai.nama", "jabatan.nama", "mulai", "seles"];

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
              ubah={true}
              hapus={true}
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
