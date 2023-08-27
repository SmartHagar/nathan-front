/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  jenis_id?: number | string;
};

type Store = {
  dtJenis: any;
  showJenis: any;
  setJenis: ({ page = 1, limit = 10, search, jenis_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowJenis: ({ jenis_id }: Props) => Promise<{
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

const useJenis = create(
  devtools<Store>((set, get) => ({
    dtJenis: [],
    showJenis: [],
    setJenis: async ({ page = 1, limit = 10, jenis_id, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/tata_usaha/jenis`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            jenis_id,
          },
        });
        set((state) => ({ ...state, dtJenis: response.data.data }));
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
    setShowJenis: async ({ jenis_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/tata_usaha/jenis/${jenis_id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showJenis: response.data.data }));
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
          url: `/tata_usaha/jenis`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtJenis: {
            last_page: prevState.dtJenis.last_page,
            current_page: prevState.dtJenis.current_page,
            data: [res.data.data, ...prevState.dtJenis.data],
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
          url: `/tata_usaha/jenis/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtJenis: {
            last_page: prevState.dtJenis.last_page,
            current_page: prevState.dtJenis.current_page,
            data: prevState.dtJenis.data.filter((item: any) => item.id !== id),
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
          url: `/tata_usaha/jenis/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtJenis: {
            last_page: prevState.dtJenis.last_page,
            current_page: prevState.dtJenis.current_page,
            data: prevState.dtJenis.data.map((item: any) => {
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

export default useJenis;
