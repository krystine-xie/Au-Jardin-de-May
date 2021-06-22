import { React } from 'react';

// react-intl
import { LOCALES } from "../i18n/locales";
import { FormattedMessage } from "react-intl";

import ContactGrid from '../components/ContactGrid/ContactGrid';

const ContactPage = (props) => {

    return (
        <div>
            <div>
               <h1><FormattedMessage id="lets_chat" /></h1>
               <ContactGrid />
            </div>
   
        </div>
    )

}

export default ContactPage;