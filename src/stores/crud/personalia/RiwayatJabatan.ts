/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  jenis?: string;
};

type Store = {
  dtRiwayatJabatan: any;
  showRiwayatJabatan: any;
  setRiwayatJabatan: ({
    page = 1,
    limit = 10,
    search,
    jenis,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowRiwayatJabatan: (id: number | string) => Promise<{
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

const useRiwayatJabatan = create(
  devtools<Store>((set, get) => ({
    dtRiwayatJabatan: [],
    showRiwayatJabatan: [],
    setRiwayatJabatan: async ({ page = 1, limit = 10, search, jenis }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/riwayat_jabatan`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            jenis,
          },
        });
        set((state) => ({ ...state, dtRiwayatJabatan: response.data.data }));
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
    setShowRiwayatJabatan: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/riwayat_jabatan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showRiwayatJabatan: response.data.data }));
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
          url: `/personalia/riwayat_jabatan`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtRiwayatJabatan: {
            last_page: prevState.dtRiwayatJabatan.last_page,
            current_page: prevState.dtRiwayatJabatan.current_page,
            data: [res.data.data, ...prevState.dtRiwayatJabatan.data],
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
          url: `/personalia/riwayat_jabatan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtRiwayatJabatan: {
            last_page: prevState.dtRiwayatJabatan.last_page,
            current_page: prevState.dtRiwayatJabatan.current_page,
            data: prevState.dtRiwayatJabatan.data.filter(
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
          url: `/personalia/riwayat_jabatan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtRiwayatJabatan: {
            last_page: prevState.dtRiwayatJabatan.last_page,
            current_page: prevState.dtRiwayatJabatan.current_page,
            data: prevState.dtRiwayatJabatan.data.map((item: any) => {
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

export default useRiwayatJabatan;
