import React from 'react'
import { Link } from 'react-router-dom'
 import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.a} to="/">
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
}
