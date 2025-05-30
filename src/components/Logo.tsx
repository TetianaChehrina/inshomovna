import Link from "next/link";
import styles from "../styles/logo.module.css";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Link href="/" className={styles.logo}>
        <Image
          src="/assets/logo-white.png"
          alt="Inshomovna Logo"
          width={70}
          height={70}
          priority
        />
      </Link>
    </>
  );
};

export default Logo;
