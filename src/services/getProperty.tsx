/** @format */

import React from "react";
import { BASE_URL } from "./baseURL";
import Image from "next/image";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const getProperty = (obj: any, prop: any) => {
  let parts = prop.split(".");
  if (Array.isArray(parts)) {
    let last = parts.length > 1 ? parts.pop() : parts;
    // jika gabungan antara pangkat golongan dan ruang
    if (last.includes("pangkat_gol_ru")) {
      return `${obj["pangkat"]["gol"]} ${obj["pangkat"]["ruang"]}`;
    }
    let l = parts.length,
      i = 1,
      current = parts[0];
    while ((obj = obj[current]) && i < l) {
      current = parts[i];
      i++;
    }
    if (typeof obj === "object") {
      return obj ? obj[last] : "";
    }
    if (
      prop === "tgl_mulai" ||
      prop === "tgl_selesai" ||
      prop === "mulai" ||
      prop === "seles"
    ) {
      return moment(obj).format("DD/MMM/YYYY");
    }
    if (prop === "gambar" || prop === "foto" || prop === "file") {
      // mengambil extension dari obj
      const extension = obj.split(".").pop();
      return (
        obj &&
        (extension === "pdf" ? (
          <a
            href={`${BASE_URL}/${obj}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-700"
          >
            Lihat File
          </a>
        ) : (
          <Image src={`${BASE_URL}/${obj}`} width={100} height={100} alt="" />
        ))
      );
    }
    return <p className="capitalize">{obj}</p>;
  } else {
    // eslint-disable-next-line no-throw-literal
    throw "parts is not valid array";
  }
};

export default getProperty;
