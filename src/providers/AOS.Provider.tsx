"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  children: ReactNode;
}

const AOSProvider = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
