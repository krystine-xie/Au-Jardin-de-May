import { React } from "react";

// react-intl
import { FormattedMessage } from "react-intl";

import ContactGrid from "../components/ContactGrid/ContactGrid";

const ContactPage = () => {
  return (
    <div>
      <div>
        <h1>
          <FormattedMessage id="lets_chat" />
        </h1>
        <ContactGrid />
      </div>
    </div>
  );
};

export default ContactPage;
