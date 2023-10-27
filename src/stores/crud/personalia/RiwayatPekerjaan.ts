/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// riwayatPekerjaan

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
};

type Store = {
  dtRiwayatPekerjaan: any;
  showRiwayatPekerjaan: any;
  setRiwayatPekerjaan: ({
    page = 1,
    limit = 10,
    search,
    tipe,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowRiwayatPekerjaan: (id: number | string) => Promise<{
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

const useRiwayatPekerjaan = create(
  devtools<Store>((set, get) => ({
    dtRiwayatPekerjaan: [],
    showRiwayatPekerjaan: [],
    setRiwayatPekerjaan: async ({ page = 1, limit = 10, search, tipe }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/riwayat_pekerjaan`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            tipe,
          },
        });
        set((state) => ({ ...state, dtRiwayatPekerjaan: response.data.data }));
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
    setShowRiwayatPekerjaan: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/riwayat_pekerjaan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({
          ...state,
          showRiwayatPekerjaan: response.data.data,
        }));
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
          url: `/personalia/riwayat_pekerjaan`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtRiwayatPekerjaan: {
            last_page: prevState.dtRiwayatPekerjaan.last_page,
            current_page: prevState.dtRiwayatPekerjaan.current_page,
            data: [res.data.data, ...prevState.dtRiwayatPekerjaan.data],
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
          url: `/personalia/riwayat_pekerjaan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtRiwayatPekerjaan: {
            last_page: prevState.dtRiwayatPekerjaan.last_page,
            current_page: prevState.dtRiwayatPekerjaan.current_page,
            data: prevState.dtRiwayatPekerjaan.data.filter(
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
          url: `/personalia/riwayat_pekerjaan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtRiwayatPekerjaan: {
            last_page: prevState.dtRiwayatPekerjaan.last_page,
            current_page: prevState.dtRiwayatPekerjaan.current_page,
            data: prevState.dtRiwayatPekerjaan.data.map((item: any) => {
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

export default useRiwayatPekerjaan;
