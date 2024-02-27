/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
type Props = {};

function Dashboard({}: Props) {
  const [role, setRole] = useState("");

  useEffect(() => {
    const role = Cookies.get("role") || "";
    setRole(role);
  }, []);

  return (
    <div>
      <h5>
        Selamat datang <span className="capitalize">{role}</span>
      </h5>
    </div>
  );
}

export default Dashboard;
