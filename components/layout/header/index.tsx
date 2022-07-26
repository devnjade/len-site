import { Button } from "components/shared";
import Link from "next/link";
import React from "react";
import styles from './index.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <p>Len</p>
        <Button styles={styles.button}>connect wallet</Button>
      </div>
    </header>
  )
}

export default Header;