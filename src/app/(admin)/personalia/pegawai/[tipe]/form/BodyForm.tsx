/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputFile from "@/components/input/InputFile";
import InputRadio from "@/components/input/InputRadio";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import SelectTahun from "@/components/select/SelectTahun";
import usePangkatApi from "@/stores/api/Pangkat";
import React, { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  tgl_lahir: Date | string;
  setTgl_lahir: any;
  tipe: string;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  tgl_lahir,
  setTgl_lahir,
  tipe,
}) => {
  const { setPangkat, dtPangkat } = usePangkatApi();
  // memanggil data pangkat
  const fetchDataPangkat = async ({ search }: any) => {
    await setPangkat({
      search,
    });
  };
  useEffect(() => {
    fetchDataPangkat({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      <InputTextDefault
        label="NIK"
        name="NIK"
        register={register}
        required
        minLength={3}
        errors={errors.NIK}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Nama"
        name="nama"
        register={register}
        required
        minLength={3}
        errors={errors.nama}
        addClass="col-span-4"
      />
      {tipe === "dosen" && (
        <InputTextDefault
          label="NIDN"
          name="NIDN"
          register={register}
          addClass="col-span-4"
        />
      )}
      {dtPangkat?.data && (
        <SelectFromDb
          label="Pangkat"
          placeholder="Pilih Pangkat"
          name="pangkat_id"
          dataDb={dtPangkat?.data}
          body={["id", "gol", "ruang"]}
          control={control}
          required
          errors={errors.pangkat_id}
          addClass="col-span-4"
        />
      )}
      {/* jenkel */}
      <div className="col-span-4 lg:col-span-2">
        <div className="w-[100%]">
          <label className="block py-2 text-sm font-medium text-gray-700 tracking-wide">
            Jenis Kelamin
          </label>
          <div className="flex gap-2">
            <InputRadio
              id="Laki-laki"
              name="jenkel"
              value="Laki-laki"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Laki-laki"}
            />
            <InputRadio
              id="Perempuan"
              name="jenkel"
              value="Perempuan"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Perempuan"}
            />
          </div>
          {errors?.jenkel?.type === "required" && (
            <p className="text-red-500 font-inter italic text-sm">
              Jenis kelamin tidak boleh kosong
            </p>
          )}
        </div>
      </div>
      <InputTextDefault
        label="Tempat Lahir"
        name="tempat_lahir"
        register={register}
        required
        minLength={3}
        errors={errors.tempat_lahir}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputDate
        label="Tgl. Lahir"
        name="tgl_lahir"
        control={control}
        startDate={tgl_lahir}
        setStartDate={setTgl_lahir}
        required
        errors={errors.tgl_lahir}
        addClass="col-span-4 lg:col-span-2"
      />

      <InputTextDefault
        label="No. Hp"
        name="no_hp"
        register={register}
        required
        minLength={3}
        errors={errors.no_hp}
        addClass="col-span-4 lg:col-span-2"
      />

      <InputTextDefault
        label="Pend. Terakhir"
        name="pend_terakhir"
        register={register}
        required
        minLength={1}
        errors={errors.pend_terakhir}
        addClass="col-span-4 lg:col-span-2"
      />
      <SelectTahun
        label="Tahun Terima"
        name="thn_terima"
        control={control}
        start={new Date().getFullYear() - 50}
        end={new Date().getFullYear()}
        required
        errors={errors.thn_terima}
        addClass="col-span-4 lg:col-span-1"
      />
      <InputTextDefault
        label="Jumlah_anak"
        name="jumlah_anak"
        register={register}
        required
        minLength={1}
        type="number"
        errors={errors.jumlah_anak}
        addClass="col-span-4 lg:col-span-1"
      />
      <InputTextDefault
        label="Alamat"
        name="alamat"
        register={register}
        required
        minLength={1}
        errors={errors.alamat}
        addClass="col-span-4"
      />

      <InputFile
        label="Foto"
        name="foto"
        register={register}
        accept="image/*"
        required
        errors={errors.foto}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.foto}
      />
    </>
  );
};

export default BodyForm;
