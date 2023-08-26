/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  alumni_id?: number | string;
  id?: number | string;
};

type Store = {
  dtLink: any;
  showLink: any;
  setLink: ({ page = 1, limit = 10, search, alumni_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowLink: ({ id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
};

const useLink = create(
  devtools<Store>((set, get) => ({
    dtLink: [],
    showLink: [],
    setLink: async ({ page = 1, limit = 10, alumni_id, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/link-pengguna`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            alumni_id,
          },
        });
        set((state) => ({ ...state, dtLink: response.data.data }));
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
    setShowLink: async ({ id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/link-pengguna/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showLink: response.data.data }));
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
    addData: async (row) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/link-pengguna`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        await get().setLink({});
        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
  }))
);

export default useLink;
