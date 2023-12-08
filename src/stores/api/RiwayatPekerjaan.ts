/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api riwayatPekerjaan
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtRiwayatPekerjaan: any;
  setRiwayatPekerjaan: (id: number) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useRiwayatPekerjaanApi = create(
  devtools<Store>((set, get) => ({
    dtRiwayatPekerjaan: [],
    setRiwayatPekerjaan: async (id) => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/riwayat/pekerjaan/${id}`,
        });
        set((state) => ({
          ...state,
          dtRiwayatPekerjaan: response.data?.data,
        }));
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

export default useRiwayatPekerjaanApi;
