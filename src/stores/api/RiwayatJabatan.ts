/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api riwayatJabatan
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtRiwayatJabatan: any;
  setRiwayatJabatan: (id: number) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useRiwayatJabatanApi = create(
  devtools<Store>((set, get) => ({
    dtRiwayatJabatan: [],
    setRiwayatJabatan: async (id) => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/riwayat/jabatan/${id}`,
        });
        set((state) => ({ ...state, dtRiwayatJabatan: response.data?.data }));
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

export default useRiwayatJabatanApi;
