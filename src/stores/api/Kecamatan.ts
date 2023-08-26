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
  dtKecamatan: any;
  setKecamatan: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setKecByKab: ({ id = 1, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useKecamatanApi = create(
  devtools<Store>((set, get) => ({
    dtKecamatan: [],
    setKecamatan: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kecamatan`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtKecamatan: response.data }));
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
    setKecByKab: async ({ id, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kecamatan/by-kabupaten/${id}`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtKecamatan: response.data }));
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

export default useKecamatanApi;
