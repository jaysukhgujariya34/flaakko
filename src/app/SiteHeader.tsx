"use client";

import React from "react";
import { usePathname } from "next/navigation";
import HeaderLogged from "@/components/Header/HeaderLogged";
import Header from "@/components/Header/Header";
import { useThemeMode } from "@/hooks/useThemeMode";

const SiteHeader = () => {
  useThemeMode();

  let pathname = usePathname();

  return pathname === "/home-2" ? <Header /> : <HeaderLogged />;
};

export default SiteHeader;
