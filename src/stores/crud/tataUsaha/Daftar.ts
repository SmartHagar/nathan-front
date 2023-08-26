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
};

type Store = {
  dtDaftar: any;
  showDaftar: any;
  setDaftar: ({ page = 1, limit = 10, search, alumni_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowDaftar: ({ alumni_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
  removeData: (
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
  updateData: (
    id: number | string,
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
};

const useDaftar = create(
  devtools<Store>((set, get) => ({
    dtDaftar: [],
    showDaftar: [],
    setDaftar: async ({ page = 1, limit = 10, alumni_id, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/daftar-pengguna`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            alumni_id,
          },
        });
        set((state) => ({ ...state, dtDaftar: response.data.data }));
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
    setShowDaftar: async ({ alumni_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/daftar-pengguna/${alumni_id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showDaftar: response.data.data }));
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
          url: `/daftar-pengguna`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtDaftar: {
            last_page: prevState.dtDaftar.last_page,
            current_page: prevState.dtDaftar.current_page,
            data: [res.data.data, ...prevState.dtDaftar.data],
          },
        }));
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
    removeData: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "delete",
          url: `/daftar-pengguna/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtDaftar: {
            last_page: prevState.dtDaftar.last_page,
            current_page: prevState.dtDaftar.current_page,
            data: prevState.dtDaftar.data.filter((item: any) => item.id !== id),
          },
        }));
        return {
          status: "berhasil hapus",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    updateData: async (id, row) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "PUT",
          url: `/daftar-pengguna/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtDaftar: {
            last_page: prevState.dtDaftar.last_page,
            current_page: prevState.dtDaftar.current_page,
            data: prevState.dtDaftar.data.map((item: any) => {
              if (item.id === id) {
                return {
                  ...item,
                  ...response.data.data,
                };
              } else {
                return item;
              }
            }),
          },
        }));
        return {
          status: "berhasil update",
          data: response.data,
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

export default useDaftar;
