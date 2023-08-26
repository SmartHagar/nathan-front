/** @format */
"use client";
import Link from "next/link";
import menus from "./Menus";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const AdminSide = () => {
  const [headMenu, setHeadMenu] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const pathname = usePathname();
  useEffect(() => {
    // split pathname by /
    const second = pathname?.split("/")[1];
    console.log(second);
    setHeadMenu(second);
    return () => {};
  }, [pathname]);

  const handleSingout = async () => {
    setIsLoading(true);
    // remove cookie token and role
    Cookies.remove("token");
    Cookies.remove("role");
    // redirect to roote page
    router.push("/");
    setIsLoading(false);
  };

  return (
    <aside className="flex flex-col w-64 h-screen px-5 overflow-y-auto">
      <div className="flex items-center mt-2 gap-2 justify-center">
        <div className="relative h-[75px] w-20">
          <Image
            alt="logo"
            fill
            sizes="(100vw, 100vh)"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
            src="/images/uogp.png"
          />
        </div>
      </div>
      <div className="mt-4 mb-2 mx-auto">
        <span className="px-3 text-sm font-semibold text-black uppercasetext-gray-400">
          Menu
        </span>
      </div>

      <div className="flex flex-col justify-between flex-1 pt-2 border-t">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 text-slate-800">
            {menus.map(({ name, href, icon, subMenus, slug }, index) => {
              const isActive = pathname === href;
              if (!subMenus) {
                return (
                  <div key={index}>
                    <Link
                      href={href}
                      className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ${
                        isActive &&
                        "border-b-2 border-primary text-primary bg-white/50"
                      }`}
                    >
                      <span>{icon}</span>
                      <span className="mx-2 text-sm font-medium">{name}</span>
                    </Link>
                  </div>
                );
              } else {
                const open = headMenu === slug;
                console.log({ open });

                return (
                  <div key={index}>
                    <details
                      className="group [&_summary::-webkit-details-marker]:hidden"
                      open={open}
                    >
                      <summary
                        className={`flex items-center justify-between px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary hover:text-gray-200 }`}
                      >
                        <div className="flex items-center cursor-pointer">
                          <span>{icon}</span>
                          <span className="mx-2 text-sm font-medium">
                            {name}
                          </span>
                        </div>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      {/* sub menus */}
                      {subMenus.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                          <div className="ml-4" key={index}>
                            <Link
                              href={item.href}
                              className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ${
                                isActive && "btn-primary text-primary"
                              }`}
                            >
                              <span className="mx-2 text-sm font-medium">
                                {item.name}
                              </span>
                            </Link>
                          </div>
                        );
                      })}
                    </details>
                  </div>
                );
              }
            })}
          </div>
        </nav>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <button
              onClick={handleSingout}
              className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-white hover:underline hover:text-gray-200"
            >
              <span>Sign Out</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default AdminSide;
