/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
  id?: number | string;
};

type Store = {
  dtPegawai: any;
  setPegawai: ({ page = 1, limit = 10, search, tipe }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setApiDokumenPegawai: ({ page = 1, search, id }: Props) => Promise<{
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

    setApiDokumenPegawai: async ({ search, page, id }) => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/pegawai/dokumen/${id}`,
          params: {
            search,
            page,
          },
        });
        set((state) => ({ ...state, dtPegawai: response.data.data }));
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
