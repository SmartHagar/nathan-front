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
  dtPekerjaan: any;
  showPekerjaan: any;
  setPekerjaan: ({
    page = 1,
    limit = 10,
    search,
    alumni_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowPekerjaan: ({ alumni_id }: Props) => Promise<{
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

const usePekerjaan = create(
  devtools<Store>((set, get) => ({
    dtPekerjaan: [],
    showPekerjaan: [],
    setPekerjaan: async ({ page = 1, limit = 10, alumni_id, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/pekerjaan`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            alumni_id,
          },
        });
        set((state) => ({ ...state, dtPekerjaan: response.data.data }));
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
    setShowPekerjaan: async ({ alumni_id }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/pekerjaan/${alumni_id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showPekerjaan: response.data.data }));
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
          url: `/pekerjaan`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtPekerjaan: {
            last_page: prevState.dtPekerjaan.last_page,
            current_page: prevState.dtPekerjaan.current_page,
            data: [res.data.data, ...prevState.dtPekerjaan.data],
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
          url: `/pekerjaan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtPekerjaan: {
            last_page: prevState.dtPekerjaan.last_page,
            current_page: prevState.dtPekerjaan.current_page,
            data: prevState.dtPekerjaan.data.filter(
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
          url: `/pekerjaan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtPekerjaan: {
            last_page: prevState.dtPekerjaan.last_page,
            current_page: prevState.dtPekerjaan.current_page,
            data: prevState.dtPekerjaan.data.map((item: any) => {
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

export default usePekerjaan;
