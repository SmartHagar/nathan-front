/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api jabatan
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtJabatan: any;
  setJabatan: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useJabatanApi = create(
  devtools<Store>((set, get) => ({
    dtJabatan: [],
    setJabatan: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/jabatan`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtJabatan: response.data }));
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

export default useJabatanApi;
