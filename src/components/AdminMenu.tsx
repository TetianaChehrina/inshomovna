"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import styles from "../styles/adminMenu.module.css";

const AdminMenu = () => {
  return (
    <div className={styles.admin_menu}>
      <Link href="/admin/dashboard" className={styles.admin_link}>
        AdminDashboard
      </Link>
      <button
        className={styles.logout_button}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Вийти
      </button>
    </div>
  );
};

export default AdminMenu;
