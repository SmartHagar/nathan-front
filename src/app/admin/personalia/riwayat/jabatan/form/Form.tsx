/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useRiwayatJabatan from "@/stores/crud/personalia/RiwayatJabatan";
import LoadingSpiner from "@/components/loading/LoadingSpiner";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  pegawai_id: number | string;
  jabatan_id: number | string;
  mulai: Date | string;
  seles: Date | string;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // state
  const [mulai, setMulai] = useState<string | Date>("");
  const [seles, setSeles] = useState<string | Date>("");
  // load
  const [saveLoad, setSaveLoad] = useState(false);
  // store
  const { addData, updateData } = useRiwayatJabatan();
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
    setValue("pegawai_id", "");
    setValue("jabatan_id", "");
    setMulai("");
    setValue("mulai", "");
    setSeles("");
    setValue("seles", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("pegawai_id", dtEdit.pegawai_id);
      setValue("jabatan_id", dtEdit.jabatan_id);
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
      title="Form RiwayatJabatan"
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
