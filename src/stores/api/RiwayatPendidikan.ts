/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api riwayatPendidikan
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtRiwayatPendidikan: any;
  setRiwayatPendidikan: (id: number) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useRiwayatPendidikanApi = create(
  devtools<Store>((set, get) => ({
    dtRiwayatPendidikan: [],
    setRiwayatPendidikan: async (id) => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/riwayat/pendidikan/${id}`,
        });
        set((state) => ({
          ...state,
          dtRiwayatPendidikan: response.data?.data,
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

export default useRiwayatPendidikanApi;
