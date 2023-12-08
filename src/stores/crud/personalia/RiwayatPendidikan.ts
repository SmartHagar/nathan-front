/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// riwayatPendidikan

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
};

type Store = {
  dtRiwayatPendidikan: any;
  showRiwayatPendidikan: any;
  setRiwayatPendidikan: ({
    page = 1,
    limit = 10,
    search,
    tipe,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowRiwayatPendidikan: (id: number | string) => Promise<{
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

const useRiwayatPendidikan = create(
  devtools<Store>((set, get) => ({
    dtRiwayatPendidikan: [],
    showRiwayatPendidikan: [],
    setRiwayatPendidikan: async ({ page = 1, limit = 10, search, tipe }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/riwayat_pendidikan`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            tipe,
          },
        });
        set((state) => ({ ...state, dtRiwayatPendidikan: response.data.data }));
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
    setShowRiwayatPendidikan: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/riwayat_pendidikan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({
          ...state,
          dtRiwayatPendidikan: response.data.data,
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
          url: `/personalia/riwayat_pendidikan`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtRiwayatPendidikan: {
            last_page: prevState.dtRiwayatPendidikan.last_page,
            current_page: prevState.dtRiwayatPendidikan.current_page,
            data: [res.data.data, ...prevState.dtRiwayatPendidikan.data],
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
          url: `/personalia/riwayat_pendidikan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtRiwayatPendidikan: {
            last_page: prevState.dtRiwayatPendidikan.last_page,
            current_page: prevState.dtRiwayatPendidikan.current_page,
            data: prevState.dtRiwayatPendidikan.data.filter(
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
          url: `/personalia/riwayat_pendidikan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtRiwayatPendidikan: {
            last_page: prevState.dtRiwayatPendidikan.last_page,
            current_page: prevState.dtRiwayatPendidikan.current_page,
            data: prevState.dtRiwayatPendidikan.data.map((item: any) => {
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

export default useRiwayatPendidikan;
