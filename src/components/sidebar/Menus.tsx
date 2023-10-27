/** @format */
interface Menu {
  name: string;
  href: string;
  icon?: JSX.Element;
  slug?: string;
  subMenus?: Menu[];
}

import { BsHouseDoorFill, BsLampFill, BsPeopleFill } from "react-icons/bs";
const menus: Menu[] = [
  {
    name: "Home",
    href: "/admin",
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
        href: "/admin/tata-usaha/jenis",
      },
      {
        name: "Surat Masuk",
        href: "/admin/tata-usaha/surat/masuk",
      },
      {
        name: "Surat Keluar",
        href: "/admin/tata-usaha/surat/keluar",
      },
      {
        name: "Dokumen Lainnya",
        href: "/admin/tata-usaha/dokumen",
      },
    ],
  },
  {
    name: "Pangkat",
    href: "/admin/pangkat",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Jabatan",
    href: "/admin/jabatan",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Personalia",
    href: "#",
    slug: "personalia",
    icon: <BsLampFill />,
    subMenus: [
      {
        name: "Pegawai",
        href: "#",
        slug: "pegawai",
        subMenus: [
          {
            name: "Dosen",
            href: "/admin/personalia/pegawai/dosen",
          },
          {
            name: "Tendik",
            href: "/admin/personalia/pegawai/tendik",
          },
        ],
      },
      {
        name: "Riwayat",
        href: "#",
        slug: "riwayat",
        subMenus: [
          {
            name: "Jabatan",
            href: "/admin/personalia/riwayat/jabatan",
          },
          {
            name: "Pendidikan",
            href: "/admin/personalia/riwayat/pendidikan",
          },
          {
            name: "Pekerjaan",
            href: "/admin/personalia/riwayat/pekerjaan",
          },
        ],
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
export type { Menu };
