"use client";

import Container from "./Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header
      className={styles.header}
      data-aos="fade-down"
      data-aos-delay="6000"
    >
      <Container>
        <div className={styles.header_container}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
