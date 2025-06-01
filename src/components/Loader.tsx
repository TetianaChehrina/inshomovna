"use client";

import { TailSpin } from "react-loader-spinner";
import styles from "../styles/loader.module.css";

export default function Loader() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading...">
      <TailSpin
        height={60}
        width={60}
        color="#a259ff"
        ariaLabel="loading"
        visible={true}
      />
    </div>
  );
}
