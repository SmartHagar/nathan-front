/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import HeaderAdmin from "@/components/header/HeaderAdmin";
import PegawaiSide from "@/components/sidebar/PegawaiSide";
import PegawaiProvider from "@/context/pegawaiContext";
import { BsMenuButtonWide } from "react-icons/bs";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  // pathname
  const pathname = usePathname();
  useEffect(() => {
    setIsVisible(false);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <Auth />
      <PegawaiProvider>
        <div className="flex min-h-screen h-screen text-black bg-bg">
          <aside
            className={`w-[18rem] z-50 lg:block ${
              isVisible ? "block absolute bg-bg" : "hidden"
            }`}
          >
            <PegawaiSide />
          </aside>
          <div className="flex h-full w-full overflow-hidden p-1 rounded-lg flex-col">
            <div className="mb-1 flex items-center justify-between lg:-mx-4 lg:-mt-2 lg:block">
              <HeaderAdmin />
              <div
                className="lg:hidden mr-2 text-xl cursor-pointer"
                onClick={handleClick}
              >
                <BsMenuButtonWide />
              </div>
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

export default Layout;
