/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "../auth/login";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  alumni_id?: number | string;
};

type Store = {
  dtPertanyaan: any;
  showPertanyaan: any;
  setPertanyaan: ({
    page = 1,
    limit = 10,
    search,
    alumni_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowPertanyaan: ({ alumni_id }: Props) => Promise<{
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

const usePertanyaan = create(
  devtools<Store>((set, get) => ({
    dtPertanyaan: [],
    showPertanyaan: [],
    setPertanyaan: async ({ page = 1, limit = 10, alumni_id, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/daftar-pertanyaan`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            alumni_id,
          },
        });
        set((state) => ({ ...state, dtPertanyaan: response.data.data }));
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
    setShowPertanyaan: async ({ alumni_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/daftar-pertanyaan/${alumni_id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showPertanyaan: response.data.data }));
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
          url: `/daftar-pertanyaan`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtPertanyaan: {
            last_page: prevState.dtPertanyaan.last_page,
            current_page: prevState.dtPertanyaan.current_page,
            data: [res.data.data, ...prevState.dtPertanyaan.data],
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
          url: `/daftar-pertanyaan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtPertanyaan: {
            last_page: prevState.dtPertanyaan.last_page,
            current_page: prevState.dtPertanyaan.current_page,
            data: prevState.dtPertanyaan.data.filter(
              (item: any) => item.id !== id
            ),
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
          url: `/daftar-pertanyaan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtPertanyaan: {
            last_page: prevState.dtPertanyaan.last_page,
            current_page: prevState.dtPertanyaan.current_page,
            data: prevState.dtPertanyaan.data.map((item: any) => {
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

export default usePertanyaan;
