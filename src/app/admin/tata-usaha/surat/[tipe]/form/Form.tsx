/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useSurat from "@/stores/crud/tataUsaha/Surat";
import LoadingSpiner from "@/components/loading/LoadingSpiner";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
  tipe: string;
};

type Inputs = {
  id: number | string;
  no_surat: number | string;
  jenis_id: number | string;
  tipe: string;
  tgl_surat: Date | string;
  hal: string;
  status: string;
  dari_ke: string;
  gambar: string;
};

const Form = ({ showModal, setShowModal, dtEdit, tipe }: Props) => {
  // state
  const [tglSurat, setTglSurat] = useState<string | Date>("");
  const [myFile, setMyFile] = useState<any>();
  // load
  const [saveLoad, setSaveLoad] = useState(false);
  // store
  const { addData, updateData } = useSurat();
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
    setValue("jenis_id", "");
    setValue("no_surat", "");
    setValue("tipe", tipe);
    setTglSurat("");
    setValue("tgl_surat", "");
    setValue("hal", "");
    setValue("dari_ke", "");
    setValue("gambar", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("no_surat", dtEdit.no_surat);
      setValue("jenis_id", parseInt(dtEdit.jenis_id));
      setValue("tipe", dtEdit.tipe);
      setValue("tgl_surat", dtEdit.tgl_surat);
      setTglSurat(new Date(dtEdit.tgl_surat));
      setValue("hal", dtEdit.hal);
      setValue("status", dtEdit.status);
      setValue("dari_ke", dtEdit.dari_ke);
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
      title="Form Surat"
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
            tglSurat={tglSurat}
            setTglSurat={setTglSurat}
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
