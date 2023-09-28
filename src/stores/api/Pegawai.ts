/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
};

type Store = {
  dtPegawai: any;
  setPegawai: ({ page = 1, limit = 10, search, tipe }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const usePegawaiApi = create(
  devtools<Store>((set, get) => ({
    dtPegawai: [],
    setPegawai: async ({ page = 1, limit = 10, search, tipe }) => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/pegawai`,
          params: {
            limit,
            page,
            search,
            tipe,
          },
        });
        set((state) => ({ ...state, dtPegawai: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default usePegawaiApi;
