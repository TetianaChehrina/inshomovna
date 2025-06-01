"use client";

import { ClipLoader } from "react-spinners";
import styles from "../styles/loader.module.css";

export default function Loader() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading...">
      <ClipLoader
        size={50}
        color="#a259ff"
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
