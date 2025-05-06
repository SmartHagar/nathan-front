/** @format */
"use client";
import PegawaiTypes from "@/types/PegawaiTypes";
import { FC, ReactNode, createContext, useEffect } from "react";
import Cookies from "js-cookie";
import usePegawai from "@/stores/crud/personalia/Pegawai";

type Props = {
  children: ReactNode;
};

interface ContextProps {
  showPegawai: PegawaiTypes | null;
}

const PegawaiContext = createContext<ContextProps>({
  showPegawai: null,
});

const PegawaiProvider: FC<Props> = ({ children }) => {
  const user_id = parseInt(Cookies.get("user_id") as string);
  const { setShowPegawai, showPegawai } = usePegawai();

  useEffect(() => {
    setShowPegawai(user_id);

    return () => {
      setShowPegawai(0);
    };
  }, [user_id, setShowPegawai]);

  const contextValue: ContextProps = {
    showPegawai,
  };

  return (
    <PegawaiContext.Provider value={contextValue}>
      {children}
    </PegawaiContext.Provider>
  );
};

export default PegawaiProvider;
export { PegawaiContext };
