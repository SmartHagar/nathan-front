/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import { PegawaiContext } from "@/context/pegawaiContext";
import useDokumen from "@/stores/crud/personalia/DokumenPegawai";
import LoadingSpiner from "@/components/loading/LoadingSpiner";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
  tipe: string;
};

type Inputs = {
  id: number | string;
  judul: string;
  gambar: string;
  pegawai_id: number | string;
};

const Form = ({ showModal, setShowModal, dtEdit, tipe }: Props) => {
  // context pegawai
  const { showPegawai } = useContext(PegawaiContext);
  // state
  const [myFile, setMyFile] = useState<any>();

  const [saveLoad, setSaveLoad] = useState(false);
  // store
  const { addData, updateData } = useDokumen();
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
    setValue("judul", "");
    setValue("gambar", "");
    setValue("pegawai_id", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("judul", dtEdit.judul);
      setValue("pegawai_id", dtEdit.pegawai_id);
      setValue("gambar", dtEdit.gambar);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    setSaveLoad(true);
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
    setTimeout(() => {
      setSaveLoad(false);
    }, 1500);
  };

  return (
    <ModalDefault
      title="Form Dokumen"
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
            myFile={myFile}
            setMyFile={setMyFile}
          />
        </div>
        <div>
          {saveLoad ? (
            <LoadingSpiner />
          ) : (
            <ButtonPrimary text="Simpan" onClick={handleSubmit(onSubmit)} />
          )}
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
