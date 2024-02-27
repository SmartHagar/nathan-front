/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useJenis from "@/stores/crud/tataUsaha/Jenis";
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
  const { setJenis, dtJenis } = useJenis();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { role } = useContext(RoleContext);

  const fetchDataJenis = async () => {
    const res = await setJenis({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataJenis();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataJenis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Jenis Surat", "Aksi"];
  const tableBodies = ["nama"];
  role === "personalia" && headTable.splice(2);
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
              dataTable={dtJenis.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={role !== "personalia" && true}
              hapus={role !== "personalia" && true}
            />
          </div>
          {dtJenis?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtJenis?.current_page}
                totalPages={dtJenis?.last_page}
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
