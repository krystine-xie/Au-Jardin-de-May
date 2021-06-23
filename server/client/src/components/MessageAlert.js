import React from "react";
import { Message } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

function MessageAlert({ color, children }) {
  return (
    <Message negative color={color}>
      {color === "green" ? (
        <Message.Header>
          <FormattedMessage id="success" />
        </Message.Header>
      ) : color === "yellow" ? (
        <Message.Header>
          <FormattedMessage id="warning" />
        </Message.Header>
      ) : (
        <Message.Header>
          <FormattedMessage id="error" />
        </Message.Header>
      )}

      <p>{children}</p>
    </Message>
  );
}

export default MessageAlert;
