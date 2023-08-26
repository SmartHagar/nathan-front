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
  dtProvinsi: any;
  setProvinsi: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useProvinsiApi = create(
  devtools<Store>((set, get) => ({
    dtProvinsi: [],
    setProvinsi: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/provinsi`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtProvinsi: response.data }));
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

export default useProvinsiApi;
