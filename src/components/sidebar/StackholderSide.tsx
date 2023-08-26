/** @format */
"use client";
import Link from "next/link";
import { stackholderMenus as menus } from "./Menus";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const StackholderSide = () => {
  const [headMenu, setHeadMenu] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    // split pathname by /
    const second = pathname?.split("/")[2];
    setHeadMenu(second);
    return () => {};
  }, [pathname]);

  const handleSingout = async () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <aside className="flex flex-col w-64 h-screen px-5 overflow-y-auto bg-primary/40 backdrop-blur-sm">
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
              borderRadius: "50%",
            }}
            src="/images/logo-alumni.jpeg"
          />
        </div>
        <div>
          <h6
            style={{
              color: "white",
              WebkitTextFillColor: "black",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "white",
              textShadow: "1px 2px 4px #176bd9",
              fontFamily: "poppins",
              fontWeight: "extrabold",
            }}
          >
            KAU OGES
          </h6>
        </div>
      </div>
      <div className="mt-4 mb-2 mx-auto">
        <span className="px-3 text-sm font-semibold text-gray-200 uppercasetext-gray-400">
          Menu
        </span>
      </div>

      <div className="flex flex-col justify-between flex-1 pt-2 border-t">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 text-gray-300">
            {menus.map(({ name, href, icon, subMenus }, index) => {
              const myLink = `/stackholder/${headMenu}${href}`;
              const isActive = pathname === myLink;
              if (!subMenus) {
                return (
                  <div key={index}>
                    <Link
                      href={myLink}
                      className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-secondary hover:text-gray-200 ${
                        isActive && "btn-primary text-slate-700"
                      }`}
                    >
                      <span>{icon}</span>
                      <span className="mx-2 text-sm font-medium">{name}</span>
                    </Link>
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

export default StackholderSide;
