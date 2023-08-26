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
  dtPertanyaan: any;
  setPertanyaan: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const usePertanyaanApi = create(
  devtools<Store>((set, get) => ({
    dtPertanyaan: [],
    setPertanyaan: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/daftar-pertanyaan`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtPertanyaan: response?.data?.data }));
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

export default usePertanyaanApi;
