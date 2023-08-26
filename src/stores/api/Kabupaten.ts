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
  dtKabupaten: any;
  setKabupaten: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setKabByProv: ({ id = 1, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useKabupatenApi = create(
  devtools<Store>((set, get) => ({
    dtKabupaten: [],
    setKabupaten: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kabupaten`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtKabupaten: response.data }));
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
    setKabByProv: async ({ id, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kabupaten/by-provinsi/${id}`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtKabupaten: response.data }));
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

export default useKabupatenApi;
