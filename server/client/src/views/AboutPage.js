import { React } from "react";
import { Container } from "semantic-ui-react";

import styles from "./StorePage.module.css";

import { FormattedMessage } from "react-intl";

const AboutPage = (props) => {
  return (
    <div>
      <div className={styles.aboutUs}>
        <Container textAlign="center">
          <h2>
            <FormattedMessage id="about_title" />
          </h2>
          <p>
            <FormattedMessage id="first_about_p" />
          </p>
          <p>
            <FormattedMessage id="second_about_p" />
          </p>

          <p>
            <FormattedMessage id="third_about_p" />
          </p>

          <p>
            <FormattedMessage id="fourth_about_p" />
          </p>
          <hr />
          <p>
            <span>
              <FormattedMessage id="fullstack" />:
            </span>{" "}
            Krystine Xie (<a href="mailto: krystinex@gmail.com">Email</a> •{" "}
            <a href="https://www.github.com/krystine-xie">GitHub</a>)
          </p>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
