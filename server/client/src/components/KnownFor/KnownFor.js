import React from "react";
import { Icon } from "semantic-ui-react";

import styles from "./KnownFor.module.css";

const KnownFor = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2>WHAT WE'RE KNOWN FOR</h2>
      <div className={styles.innerWrapper}>
        <div className={styles.box}>
          <Icon inverted name="lightbulb outline" size="big" />
          <h3>CONTEMPORARY</h3>
          <p className={styles.text}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={styles.box}>
          <Icon inverted name="leaf" size="big" />
          <h3>HANDPICKED & FRESH</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.box}>
          <Icon inverted name="hourglass outline" size="big" />
          <h3>LONG LASTING</h3>
          <p className={styles.text}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnownFor;
