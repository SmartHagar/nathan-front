/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "../auth/login";
// import Cookies from "js-cookie";

type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtAlumni: any;
  setAlumni: ({ page = 1, limit = 10, search }: Props) => Promise<{
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

const useAlumni = create(
  devtools<Store>((set, get) => ({
    setFormData: (row: any) => {
      const formData = new FormData();
      formData.append("nama", row.nama);
      formData.append("tempat", row.tempat);
      formData.append("tgl_lahir", row.tgl_lahir);
      formData.append("jenkel", row.jenkel);
      formData.append("no_hp", row.no_hp);
      formData.append("email", row.email);
      formData.append("foto", row.foto);
      formData.append("kecamatan_id", row.kecamatan_id);
      formData.append("alamat_lengkap", row.alamat_lengkap);
      formData.append("prodi_id", row.prodi_id);
      formData.append("thn_masuk", row.thn_masuk);
      formData.append("thn_lulus", row.thn_lulus);
      formData.append("status_nikah", row.status_nikah);
      formData.append("nm_pasangan", row.nm_pasangan);
      formData.append("jmlh_anak", row.jmlh_anak);
      return formData;
    },
    dtAlumni: [],
    setAlumni: async ({ page = 1, limit = 10, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/alumni`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtAlumni: response.data.data }));
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
          url: `/alumni`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        set((prevState: any) => ({
          dtAlumni: {
            last_page: prevState.dtAlumni.last_page,
            current_page: prevState.dtAlumni.current_page,
            data: [res.data.data, ...prevState.dtAlumni.data],
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
          url: `/alumni/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState: any) => ({
          dtAlumni: {
            last_page: prevState.dtAlumni.last_page,
            current_page: prevState.dtAlumni.current_page,
            data: prevState.dtAlumni.data.filter((item: any) => item.id !== id),
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
          url: `/alumni/${id}`,
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
          dtAlumni: {
            last_page: prevState.dtAlumni.last_page,
            current_page: prevState.dtAlumni.current_page,
            data: prevState.dtAlumni.data.map((item: any) => {
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

export default useAlumni;
