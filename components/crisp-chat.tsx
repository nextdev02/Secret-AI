"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("da3f8be4-bd99-4846-9f6d-dd1791f48d1b");
  }, []);

  return null;
};