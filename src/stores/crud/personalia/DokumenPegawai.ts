/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";
import usePegawaiApi from "@/stores/api/Pegawai";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
};

type Store = {
  dtDokumen: any;
  showDokumen: any;
  setDokumen: ({ page = 1, limit = 10, search, tipe }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowDokumen: (id: string | number) => Promise<{
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
  setFormData: any;
};

const useDokumen = create(
  devtools<Store>((set, get) => ({
    setFormData: (row: any) => {
      const formData = new FormData();
      formData.append("pegawai_id", row.pegawai_id);
      formData.append("judul", row.judul);
      formData.append("gambar", row.gambar);
      return formData;
    },
    dtDokumen: [],
    showDokumen: [],
    setDokumen: async ({ page = 1, limit = 10, tipe, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/dokumen_pegawai`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            tipe,
          },
        });
        set((state) => ({ ...state, dtDokumen: response.data.data }));
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
    setShowDokumen: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/dokumen_pegawai/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showDokumen: response.data.data }));
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
      const formData = row?.gambar ? get().setFormData(row) : row;
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/personalia/dokumen_pegawai`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        set((prevState: any) => ({
          dtDokumen: {
            last_page: prevState.dtDokumen.last_page,
            current_page: prevState.dtDokumen.current_page,
            data: [res.data.data, ...prevState.dtDokumen.data],
          },
        }));
        // call setApiDokumenPegawai from usePegawaiApi
        usePegawaiApi.getState().setApiDokumenPegawai({ id: row.pegawai_id });
        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        console.log({ error });
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
          url: `/personalia/dokumen_pegawai/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState: any) => ({
          dtDokumen: {
            last_page: prevState.dtDokumen.last_page,
            current_page: prevState.dtDokumen.current_page,
            data: prevState.dtDokumen.data.filter(
              (item: any) => item.id !== id
            ),
          },
        }));
        // call setApiDokumenPegawai from usePegawaiApi
        usePegawaiApi
          .getState()
          .setApiDokumenPegawai({ id: res.data.data.pegawai_id });
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
      delete row.id;
      const formData = row?.gambar ? get().setFormData(row) : row;
      const token = await useLogin.getState().setToken();
      const headersImg = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await crud({
          url: `/personalia/dokumen_pegawai/${id}`,
          method: "post",
          headers: row?.gambar
            ? headersImg
            : {
                Authorization: `Bearer ${token}`,
              },
          data: formData,
          params: {
            _method: "PUT",
          },
        });
        set((prevState: any) => ({
          dtDokumen: {
            last_page: prevState.dtDokumen.last_page,
            current_page: prevState.dtDokumen.current_page,
            data: prevState.dtDokumen.data.map((item: any) => {
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
        usePegawaiApi
          .getState()
          .setApiDokumenPegawai({ id: response.data.data.pegawai_id });
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

export default useDokumen;
