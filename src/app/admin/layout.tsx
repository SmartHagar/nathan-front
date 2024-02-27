/** @format */
"use client";
import HeaderAdmin from "@/components/header/HeaderAdmin";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import AdminSide from "@/components/sidebar/AdminSide";
import useLogin from "@/stores/auth/login";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BsMenuButtonWide } from "react-icons/bs";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  // state
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  // pathname
  const pathname = usePathname();
  // route
  const route = useRouter();
  const { cekToken } = useLogin();
  const getCek = async () => {
    const res = await cekToken();
    if (res?.error) {
      // redirect to login
      route.push("/");
    }
    return res;
  };

  useEffect(() => {
    getCek();
    setIsVisible(false);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const loadData = async () => {
    const cek = await getCek();
    if (!cek?.error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    console.log("pertama render");
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen h-screen justify-center items-center">
        <LoadingSpiner />
      </div>
    );
  }

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="flex min-h-screen h-screen text-black bg-bg">
        <aside
          className={`w-[18rem] z-50 lg:block ${
            isVisible ? "block absolute bg-bg" : "hidden"
          }`}
        >
          <AdminSide />
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
    </div>
  );
};

export default Layout;
