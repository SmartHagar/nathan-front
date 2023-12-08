/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useRiwayatPekerjaan from "@/stores/crud/personalia/RiwayatPekerjaan";
import { PegawaiContext } from "@/context/pegawaiContext";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  pegawai_id?: number | string;
  jabatan: string;
  instansi: string;
  mulai: Date | string;
  seles: Date | string;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // context pegawai
  const { showPegawai } = useContext(PegawaiContext);
  // state
  const [mulai, setMulai] = useState<string | Date>("");
  const [seles, setSeles] = useState<string | Date>("");
  // store
  const { addData, updateData } = useRiwayatPekerjaan();
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
    setValue("jabatan", "");
    setValue("instansi", "");
    setMulai("");
    setValue("mulai", "");
    setSeles("");
    setValue("seles", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("jabatan", dtEdit.jabatan);
      setValue("instansi", dtEdit.instansi);
      setValue("mulai", dtEdit.mulai);
      setMulai(new Date(dtEdit.mulai));
      setValue("seles", dtEdit.seles);
      setSeles(new Date(dtEdit.seles));
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    row.pegawai_id = showPegawai?.id;
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
      title="Form RiwayatPekerjaan"
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
            mulai={mulai}
            setMulai={setMulai}
            seles={seles}
            setSeles={setSeles}
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
