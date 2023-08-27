/** @format */
import { BsHouseDoorFill, BsLampFill, BsPeopleFill } from "react-icons/bs";
const menus = [
  {
    name: "Home",
    href: "/",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Tata Usaha",
    href: "#",
    slug: "tata-usaha",
    icon: <BsLampFill />,
    subMenus: [
      {
        name: "Jenis",
        href: "/tata-usaha/jenis",
      },
      {
        name: "Surat Masuk",
        href: "/tata-usaha/surat/masuk",
      },
      {
        name: "Surat Keluar",
        href: "/tata-usaha/surat/keluar",
      },
      {
        name: "Dokumen Lainnya",
        href: "/tata-usaha/dokumenLainnya",
      },
    ],
  },
];
// list menu stackholder
const stackholderMenus = [
  {
    name: "Dashboard",
    href: "",
    slug: "dashboard",
    icon: <BsHouseDoorFill />,
    subMenus: false,
  },
  {
    name: "Penilaian",
    href: "/penilaian",
    icon: <BsPeopleFill />,
  },
];

export default menus;
export { stackholderMenus };
