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
  dtKepuasan: any;
  setKepuasan: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setByLinkPengguna: (pengguna: string | number) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
};

const useKepuasanApi = create(
  devtools<Store>((set, get) => ({
    dtKepuasan: [],
    setKepuasan: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kepuasan`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtKepuasan: response.data }));
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
    setByLinkPengguna: async (pengguna) => {
      try {
        const response = await api({
          method: "get",
          url: `/kepuasan/by-link-pengguna/${pengguna}`,
        });
        set((state) => ({ ...state, dtKepuasan: response.data?.data }));
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
    addData: async (row) => {
      try {
        const res = await api({
          method: "post",
          url: `/kepuasan`,
          data: row,
        });
        await get().setByLinkPengguna(row.link_pengguna_id);
        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
  }))
);

export default useKepuasanApi;
