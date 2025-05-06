/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { RoleContext } from "@/context/roleContext";
import usePangkat from "@/stores/crud/personalia/Pangkat";
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
  const { setPangkat, dtPangkat } = usePangkat();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { role } = useContext(RoleContext);

  const fetchDataPangkat = async () => {
    const res = await setPangkat({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataPangkat();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataPangkat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Golongan", "Pangkat", "Ruangan", "Aksi"];
  const tableBodies = ["gol", "pangkat", "ruang"];

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
              dataTable={dtPangkat.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={role === "personalia" ? true : false}
              hapus={role === "personalia" ? true : false}
            />
          </div>
          {dtPangkat?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtPangkat?.current_page}
                totalPages={dtPangkat?.last_page}
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
