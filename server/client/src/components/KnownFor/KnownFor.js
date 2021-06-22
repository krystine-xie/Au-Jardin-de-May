import React from "react";
import { Icon } from "semantic-ui-react";

import styles from "./KnownFor.module.css";

import { LOCALES } from "../../i18n/locales";
import { FormattedMessage } from "react-intl";

const KnownFor = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1><FormattedMessage id="known_for" /></h1>
      <div className={styles.innerWrapper}>
        <div className={styles.box}>
          <Icon inverted name="lightbulb outline" size="big" />
          <h3><FormattedMessage id="contemporary" /></h3>
          <p className={styles.text}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={styles.box}>
          <Icon inverted name="leaf" size="big" />
          <h3><FormattedMessage id="handpicked" /></h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.box}>
          <Icon inverted name="hourglass outline" size="big" />
          <h3><FormattedMessage id="long_lasting" /></h3>
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
