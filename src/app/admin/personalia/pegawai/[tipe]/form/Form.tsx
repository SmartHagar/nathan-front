/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import usePegawai from "@/stores/crud/personalia/Pegawai";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
  tipe: string;
};

type Inputs = {
  id: number | string;
  pangkat_id: number | string;
  NIK: number | string;
  tipe: string;
  NIDN: number | string;
  nama: string;
  tempat_lahir: string;
  tgl_lahir: Date | string;
  no_hp: number | string;
  jumlah_anak: number;
  jenkel: string;
  pend_terakhir: string;
  alamat: string;
  thn_terima: number | string;
  foto: string;
};

const Form = ({ showModal, setShowModal, dtEdit, tipe }: Props) => {
  // state
  const [tgl_lahir, setTgl_lahir] = useState<string | Date>(
    new Date("01-01-1980")
  );
  const [myFile, setMyFile] = useState<any>();
  // store
  const { addData, updateData } = usePegawai();
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("NIK", "");
    setValue("pangkat_id", "");
    setValue("tipe", tipe);
    setValue("NIDN", "");
    setValue("nama", "");
    setValue("tempat_lahir", "");
    setTgl_lahir(new Date("01-01-1980"));
    setValue("tgl_lahir", "1980-01-01");
    setValue("no_hp", "");
    setValue("jumlah_anak", 0);
    setValue("jenkel", "");
    setValue("pend_terakhir", "");
    setValue("alamat", "");
    setValue("thn_terima", "");
    setValue("foto", "");
    setMyFile(null);
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("pangkat_id", dtEdit.pangkat_id);
      setValue("NIK", dtEdit.NIK);
      setValue("tipe", dtEdit.tipe);
      setValue("NIDN", dtEdit.NIDN || "");
      setValue("nama", dtEdit.nama);
      setValue("tempat_lahir", dtEdit.tempat_lahir);
      setValue("tgl_lahir", dtEdit.tgl_lahir);
      setTgl_lahir(new Date(dtEdit.tgl_lahir));
      setValue("no_hp", dtEdit.no_hp);
      setValue("jumlah_anak", dtEdit.jumlah_anak);
      setValue("jenkel", dtEdit.jenkel);
      setValue("pend_terakhir", dtEdit.pend_terakhir);
      setValue("alamat", dtEdit.alamat);
      setValue("thn_terima", parseInt(dtEdit.thn_terima));
      setValue("foto", dtEdit.foto);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    console.log({ row });
    // jika dtEdit tidak kosong maka update
    if (dtEdit) {
      const { data } = await updateData(dtEdit.id, row);
      toastShow({
        event: data,
      });
      setShowModal(false);
    } else {
      const { data } = await addData(row);
      console.log({ data });
      toastShow({
        event: data,
      });
      data?.type !== "success" ? null : resetForm();
    }
  };

  return (
    <ModalDefault
      title="Form Pegawai"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDefault name="id" register={register} type="hidden" />

        <div className="grid grid-cols-4 gap-2 mb-4">
          <BodyForm
            register={register}
            errors={errors}
            dtEdit={dtEdit}
            control={control}
            watch={watch}
            setValue={setValue}
            showModal={showModal}
            tgl_lahir={tgl_lahir}
            setTgl_lahir={setTgl_lahir}
            tipe={tipe}
            myFile={myFile}
            setMyFile={setMyFile}
          />
        </div>
        <div>
          <ButtonPrimary text="Simpan" onClick={handleSubmit(onSubmit)} />
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
