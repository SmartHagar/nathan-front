/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
};

type Store = {
  dtPegawai: any;
  showPegawai: any;
  setPegawai: ({ page, limit, search, tipe }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowPegawai: (id: string | number) => Promise<{
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

const usePegawai = create(
  devtools<Store>((set, get) => ({
    setFormData: (row: any) => {
      const formData = new FormData();
      formData.append("pangkat_id", row.pangkat_id);
      formData.append("tipe", row.tipe);
      formData.append("NIK", row.NIK);
      formData.append("NIDN", row.NIDN);
      formData.append("nama", row.nama);
      formData.append("tempat_lahir", row.tempat_lahir);
      formData.append("tgl_lahir", row.tgl_lahir);
      formData.append("no_hp", row.no_hp);
      formData.append("jumlah_anak", row.jumlah_anak);
      formData.append("jenkel", row.jenkel);
      formData.append("pend_terakhir", row.pend_terakhir);
      formData.append("alamat", row.alamat);
      formData.append("thn_terima", row.thn_terima);
      formData.append("foto", row.foto);
      return formData;
    },
    dtPegawai: [],
    showPegawai: [],
    setPegawai: async ({ page = 1, limit = 10, search, tipe }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/pegawai`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            tipe,
          },
        });
        set((state) => ({ ...state, dtPegawai: response.data.data }));
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
    setShowPegawai: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/personalia/pegawai/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showPegawai: response.data.data }));
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
      const formData = row?.foto ? get().setFormData(row) : row;
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/personalia/pegawai`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        set((prevState: any) => ({
          dtPegawai: {
            last_page: prevState.dtPegawai.last_page,
            current_page: prevState.dtPegawai.current_page,
            data: [res.data.data, ...prevState.dtPegawai.data],
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
          url: `/personalia/pegawai/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState: any) => ({
          dtPegawai: {
            last_page: prevState.dtPegawai.last_page,
            current_page: prevState.dtPegawai.current_page,
            data: prevState.dtPegawai.data.filter(
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
      delete row.id;
      const formData = row?.foto ? get().setFormData(row) : row;
      const token = await useLogin.getState().setToken();
      const headersImg = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await crud({
          url: `/personalia/pegawai/${id}`,
          method: "post",
          headers: row?.foto
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
          dtPegawai: {
            last_page: prevState.dtPegawai.last_page,
            current_page: prevState.dtPegawai.current_page,
            data: prevState.dtPegawai.data.map((item: any) => {
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

export default usePegawai;
