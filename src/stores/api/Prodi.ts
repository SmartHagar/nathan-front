/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
import axios from "axios";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  id?: number | string;
};

type Store = {
  dtProdi: any;
  setProdi: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useProdiApi = create(
  devtools<Store>((set, get) => ({
    dtProdi: [],
    setProdi: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await axios({
          method: "get",
          url: `https://back.edom.fstuogp.com/api/prodi`,
          params: {
            limit,
            page,
            search,
          },
        });

        const dtProdi = response.data?.data;
        // not show nama : 'umum' in dtProdi.data
        dtProdi.data = dtProdi.data.filter((item: any) => item.nama !== "umum");

        set((state) => ({ ...state, dtProdi: dtProdi }));
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

export default useProdiApi;
