/** @format */
"use client";
import HeaderAdmin from "@/components/header/HeaderAdmin";
import AdminSide from "@/components/sidebar/AdminSide";
import useLogin from "@/stores/auth/login";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const route = useRouter();
  // pathname
  const pathname = usePathname();
  const { cekToken } = useLogin();
  const getCek = async () => {
    // const res = await cekToken();
    // if (res?.error) {
    //   // redirect to login
    //   route.push("/login");
    // }
  };

  useEffect(() => {
    getCek();
    return () => {};
  }, [pathname]);

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
