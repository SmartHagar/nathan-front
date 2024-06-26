/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
import useDokumen from "../crud/personalia/DokumenPegawai";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
  id?: number | string;
};

type Store = {
  dtPegawai: any;
  setPegawai: ({ page, limit, search, tipe }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setApiDokumenPegawai: ({ page, search, id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setTotalTipe: () => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const usePegawaiApi = create(
  devtools<Store>((set, get) => ({
    dtPegawai: [],
    setPegawai: async ({ page = 1, limit = 10, search, tipe }) => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/pegawai`,
          params: {
            limit,
            page,
            search,
            tipe,
          },
        });
        set((state) => ({ ...state, dtPegawai: response.data }));
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

    setApiDokumenPegawai: async ({ search, page, id }) => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/pegawai/dokumen/${id}`,
          params: {
            search,
            page,
          },
        });
        useDokumen.getState().setDokumen({
          page,
          search,
        });
        set((state) => ({ ...state, dtPegawai: response.data.data }));
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

    setTotalTipe: async () => {
      try {
        const response = await api({
          method: "get",
          url: `/personalia/pegawai/total_tipe`,
        });
        set((state) => ({ ...state, dtPegawai: response.data.data }));
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

export default usePegawaiApi;
