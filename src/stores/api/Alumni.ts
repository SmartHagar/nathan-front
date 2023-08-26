/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  prodi_id?: number | string;
  id?: number | string;
};

type Store = {
  dtAlumni: any;
  setAlumni: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useAlumniApi = create(
  devtools<Store>((set, get) => ({
    dtAlumni: [],
    setAlumni: async ({ page = 1, limit = 10, search, prodi_id }) => {
      try {
        const response = await api({
          method: "get",
          url: `/alumni`,
          params: {
            limit,
            page,
            search,
            prodi_id,
          },
        });
        set((state) => ({ ...state, dtAlumni: response.data?.data }));
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

export default useAlumniApi;
