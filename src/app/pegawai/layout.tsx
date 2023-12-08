/** @format */

import React from "react";
import Auth from "./Auth";
import HeaderAdmin from "@/components/header/HeaderAdmin";
import PegawaiSide from "@/components/sidebar/PegawaiSide";
import PegawaiProvider from "@/context/pegawaiContext";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div>
      <Auth />
      <PegawaiProvider>
        <div className="flex min-h-screen h-screen text-black bg-bg">
          <aside className="w-[18rem] z-50">
            <PegawaiSide />
          </aside>
          <div className="flex h-full w-full overflow-hidden p-1 rounded-lg flex-col">
            <div className="-mx-4 -mt-2 mb-1">
              <HeaderAdmin />
            </div>
            <div className="bg-white h-full overflow-hidden p-2 drop-shadow-2xl shadow-black rounded-lg">
              {props.children}
            </div>
          </div>
        </div>
      </PegawaiProvider>
    </div>
  );
};

export default layout;
