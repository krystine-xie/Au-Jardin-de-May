import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Link to="/" style={{ color: "black" }}>
        <h1 className={styles.header}>Au Jardin de May</h1>
      </Link>
    </div>
  );
};

export default Header;
