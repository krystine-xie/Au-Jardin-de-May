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
            Au Jardin de May is an e-commerce website built to showcase my
            mother's (May) flowers and succulent arrangements. All of the
            "products" shown on this website were handmade by her and
            subsequently gifted to friends and family.
          </p>
          <p>
            The website's front-end is build with{" "}
            <span>ReactJS, Semantic UI</span> and <span>vanilla CSS</span> with
            responsiveness in mind, and the back-end is built with{" "}
            <span>Python</span> through the <span>Django Framework</span>. The
            RESTful API was built with <span>Django Rest Framework</span>. The
            front-end state is managed through the use of{" "}
            <span>Redux + Redux DevTools</span> for debugging purposes.
          </p>

          <p>
            Au Jardin De May uses <span>PostGreSQL</span> for its database.
          </p>

          <p>
            Additionally, this website integrates the <span>Paypal API</span> to
            manage the payments (using Sandbox test accounts).
          </p>
          <hr />
          <p>
            <span>
              <FormattedMessage id="fullstack" />:
            </span>{" "}
            Krystine Xie (
            <a href="mailto: krystinex@gmail.com">krystinex@gmail.com</a>)
          </p>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
