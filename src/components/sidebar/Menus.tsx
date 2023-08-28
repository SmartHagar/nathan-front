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
        href: "/tata-usaha/dokumen",
      },
    ],
  },
  {
    name: "Pangkat",
    href: "/pangkat",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Jabatan",
    href: "/jabatan",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Personalia",
    href: "#",
    slug: "personalia",
    icon: <BsLampFill />,
    subMenus: [
      {
        name: "Dosen",
        href: "/personalia/pegawai/dosen",
      },
      {
        name: "Tendik",
        href: "/personalia/pegawai/tendik",
      },
      {
        name: "Pekarya",
        href: "/personalia/pegawai/pekarya",
      },
      {
        name: "Satkam",
        href: "/personalia/pegawai/satkam",
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
