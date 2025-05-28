"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/navigation.module.css";
import AdminMenu from "./AdminMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const handleClose = () => setIsOpen(false);

  return (
    <nav className={styles.navigation}>
      <button
        className={styles.menu_icon}
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      <div className={`${styles.nav_container} ${isOpen ? styles.open : ""}`}>
        <button
          className={styles.close_icon}
          aria-label="Close menu"
          onClick={handleClose}
        >
          <FaTimes size={20} />
        </button>

        <ul className={styles.nav_links}>
          <li>
            <Link href="/" onClick={handleClose}>
              Головна
            </Link>
          </li>
          <li>
            <a href="#courses" onClick={handleClose}>
              Курси
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleClose}>
              Про школу
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClose}>
              Контакти
            </a>
          </li>
          {session?.user?.role === "admin" ? (
            <li>
              <AdminMenu />
            </li>
          ) : (
            <li>
              <Link href="/login" onClick={handleClose}>
                Логін
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
