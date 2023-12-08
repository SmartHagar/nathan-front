/** @format */
interface Menu {
  name: string;
  href: string;
  icon?: JSX.Element;
  slug?: string;
  subMenus?: Menu[];
}

import {
  BsHouseDoorFill,
  BsLampFill,
  BsPeopleFill,
  BsFillSignpost2Fill,
  BsFillWrenchAdjustableCircleFill,
  BsFillMagnetFill,
} from "react-icons/bs";
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
    icon: <BsFillMagnetFill />,
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
    icon: <BsFillSignpost2Fill />,
  },
  {
    name: "Jabatan",
    href: "/admin/jabatan",
    icon: <BsFillWrenchAdjustableCircleFill />,
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
const pegawaiMenus = [
  {
    name: "Home",
    href: "/pegawai",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Riwayat",
    href: "#",
    slug: "riwayat",
    icon: <BsFillMagnetFill />,
    subMenus: [
      {
        name: "Jabatan",
        href: "/pegawai/riwayat/jabatan",
      },
      {
        name: "Pendidikan",
        href: "/pegawai/riwayat/pendidikan",
      },
      {
        name: "Pekerjaan",
        href: "/pegawai/riwayat/pekerjaan",
      },
    ],
  },
  {
    name: "Dokumen",
    href: "/pegawai/dokumen",
    icon: <BsFillSignpost2Fill />,
  },
];

export default menus;
export { pegawaiMenus };
export type { Menu };
