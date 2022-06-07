import Image from "next/image";
import Head from "next/head";
import styles from "./Header.module.scss";
import { HEADER_IMAGE } from "../../lib/constants";

const Header = () => {
  return (
    <header className={styles.header}>
      <Head>
        <title>SLNFT</title>
      </Head>
      <span>SLNFT</span>
    </header>
  );
};

export default Header;
