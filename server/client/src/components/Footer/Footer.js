import React from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <div>
      <div className={styles.newsletterDiv}>
        <h1 className={styles.newsletterHeader}>
          {" "}
          <FormattedMessage id="newsletter" />{" "}
        </h1>
        <div className={styles.emailInput}>
          <Form success>
            <Form.Input placeholder="hello@jdm.com" />
            <Button inverted color="grey">
              <FormattedMessage id="submit_button" />
            </Button>
          </Form>
        </div>
      </div>

      <div className={styles.socialMedia}>
        <Icon name="instagram" size="large" link />
        <Icon name="facebook" size="large" link />
        <Icon name="twitter" size="large" link />
      </div>
      <div className={styles.footerNav}>
        <Link to="/about" className={styles.footerLink}>
          <FormattedMessage id="about_page" />
        </Link>
        <Link to="/store" className={styles.footerLink}>
          <FormattedMessage id="store_page" />
        </Link>
        <Link to="/cart" className={styles.footerLink}>
          <FormattedMessage id="my_cart" />
        </Link>
        <Link to="/contact" className={styles.footerLink}>
          <FormattedMessage id="contact_us" />
        </Link>
      </div>

      <p className={styles.copyright}>© Krystine Xie 2021</p>
    </div>
  );
};

export default Footer;
