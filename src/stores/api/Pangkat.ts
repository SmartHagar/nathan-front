/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtPangkat: any;
  setPangkat: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const usePangkatApi = create(
  devtools<Store>((set, get) => ({
    dtPangkat: [],
    setPangkat: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/pangkat`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtPangkat: response.data }));
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

export default usePangkatApi;
