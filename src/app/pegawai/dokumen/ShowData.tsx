/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { PegawaiContext } from "@/context/pegawaiContext";
import usePegawaiApi from "@/stores/api/Pegawai";
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
  const { showPegawai } = useContext(PegawaiContext);
  const { setApiDokumenPegawai, dtPegawai } = usePegawaiApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataDokumen = async () => {
    const res = await setApiDokumenPegawai({
      page,
      search,
      id: showPegawai?.id,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataDokumen();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, showPegawai?.id]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataDokumen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Judul", "Gambar / File", "Aksi"];
  const tableBodies = ["judul", "gambar"];
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
              dataTable={dtPegawai.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
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
