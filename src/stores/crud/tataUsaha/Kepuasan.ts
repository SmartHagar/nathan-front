/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  id?: number | string;
};

type Store = {
  dtKepuasan: any;
  showKepuasan: any;
  setKepuasan: ({ page = 1, limit = 10, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowKepuasan: ({ id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useKepuasan = create(
  devtools<Store>((set, get) => ({
    dtKepuasan: [],
    showKepuasan: [],
    setKepuasan: async ({ page = 1, limit = 10, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/kepuasan-pengguna`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtKepuasan: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response?.data,
        };
      }
    },
    setShowKepuasan: async ({ id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/kepuasan-pengguna/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showKepuasan: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response?.data,
        };
      }
    },
  }))
);

export default useKepuasan;
