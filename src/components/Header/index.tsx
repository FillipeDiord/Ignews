import Image from "next/image";
import { SignInButton } from "../SignInButton";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image width="110px" height="31px" src="/images/logo.svg" alt="IgNews" />
        <nav>
          <a>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}