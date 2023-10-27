/** @format */
"use client";
import HeaderAdmin from "@/components/header/HeaderAdmin";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import AdminSide from "@/components/sidebar/AdminSide";
import useLogin from "@/stores/auth/login";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  // state
  const [isLoading, setIsLoading] = useState(true);
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
    } else {
      const role = Cookies.get("role");
      if (role !== "admin") {
        route.push(`/${role}`);
      }
    }
    return res;
  };

  useEffect(() => {
    getCek();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const loadData = async () => {
    const cek = await getCek();
    console.log({ cek });
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

  return (
    <div>
      <div className="flex min-h-screen h-screen text-black bg-bg">
        <aside className="w-[18rem] z-50">
          <AdminSide />
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
    </div>
  );
};

export default Layout;
