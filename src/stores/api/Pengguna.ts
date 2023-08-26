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
  dtPengguna: any;
  setPengguna: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setAktif: ({ id = 1, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setByLink: (link: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const usePenggunaApi = create(
  devtools<Store>((set, get) => ({
    dtPengguna: [],
    setPengguna: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pengguna`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtPengguna: response.data }));
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
    setAktif: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pengguna/aktif`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtPengguna: response.data?.data }));
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
    setByLink: async (link) => {
      try {
        const response = await api({
          method: "get",
          url: `/pengguna/by-link/${link}`,
        });
        set((state) => ({ ...state, dtPengguna: response.data?.data }));
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

export default usePenggunaApi;
