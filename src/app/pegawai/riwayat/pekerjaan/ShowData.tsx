/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { PegawaiContext } from "@/context/pegawaiContext";
import useRiwayatPekerjaan from "@/stores/crud/personalia/RiwayatPekerjaan";
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
  const { setShowRiwayatPekerjaan, dtRiwayatPekerjaan } = useRiwayatPekerjaan();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataRiwayatPekerjaan = async () => {
    const res = await setShowRiwayatPekerjaan(showPegawai?.id as number);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataRiwayatPekerjaan();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, showPegawai?.id]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataRiwayatPekerjaan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Jabatan", "Instansi", "Masuk", "Selesai", "Aksi"];
  const tableBodies = ["jabatan", "instansi", "mulai", "seles"];

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
              dataTable={dtRiwayatPekerjaan.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtRiwayatPekerjaan?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtRiwayatPekerjaan?.current_page}
                totalPages={dtRiwayatPekerjaan?.last_page}
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
