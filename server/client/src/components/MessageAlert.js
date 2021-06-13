import React from "react";
import { Message } from "semantic-ui-react";

function MessageAlert({ color, children }) {
  return (
    <Message negative color={color}>
      {color === "green" ? (
        <Message.Header>SUCCESS</Message.Header>
      ) : color === "yellow" ? (
        <Message.Header>WARNING</Message.Header>
      ) : (
        <Message.Header>ERROR</Message.Header>
      )}

      <p>{children}</p>
    </Message>
  );
}

export default MessageAlert;
