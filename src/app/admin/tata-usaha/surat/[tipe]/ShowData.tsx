/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useSurat from "@/stores/crud/tataUsaha/Surat";
import React, { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";

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
  const { setSurat, dtSurat } = useSurat();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataSurat = async () => {
    const res = await setSurat({
      page,
      limit,
      search,
      tipe,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataSurat();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataSurat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Jenis Surat",
    "Hal",
    "Dari",
    "Status",
    "Tgl Surat",
    "Gambar / File",
    "Aksi",
  ];
  const tableBodies = [
    "jenis.nama",
    "hal",
    "dari_ke",
    "status",
    "tgl_surat",
    "gambar",
  ];
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
              dataTable={dtSurat.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtSurat?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtSurat?.current_page}
                totalPages={dtSurat?.last_page}
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
