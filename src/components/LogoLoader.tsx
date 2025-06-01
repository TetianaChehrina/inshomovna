"use client";

import { useEffect, useState } from "react";
import styles from "../styles/logoLoader.module.css";

export default function LogoLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLogo ? (
        <div className={styles.loader}>
          <video
            src="/logo-animation.mp4"
            autoPlay
            muted
            playsInline
            className={styles.logo_video}
          />
        </div>
      ) : (
        children
      )}
    </>
  );
}
