import React from "react";
import styles from "./HomePageBanner.module.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";

const HomePageBanner = (props) => {
  return (
    <div className={styles.showcase}>
      <div>
        <h1 className={styles.showcaseHeader}>
          <FormattedMessage id="shop_subheader1" />
        </h1>
        <h1 className={styles.showcaseHeader2}>
          <FormattedMessage id="shop_subheader2" />
        </h1>
        <h3 className={styles.showcaseSubHeader}>
          <FormattedMessage id="shop_description" />
        </h3>
        <br />
        <br />
        <Button as={Link} to="/store" size="huge">
          <FormattedMessage id="shop_now" />
        </Button>
      </div>
    </div>
  );
};

export default HomePageBanner;
