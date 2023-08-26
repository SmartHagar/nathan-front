/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  id?: number | string;
};

type Store = {
  dtPekerjaan: any;
  setPekerjaan: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setMasihKerja: ({ id = 1, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const usePekerjaanApi = create(
  devtools<Store>((set, get) => ({
    dtPekerjaan: [],
    setPekerjaan: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pekerjaan`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtPekerjaan: response.data }));
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
    setMasihKerja: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pekerjaan/masih-kerja`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtPekerjaan: response.data }));
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

export default usePekerjaanApi;
