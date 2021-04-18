import React from 'react';
import { Message } from 'semantic-ui-react'


function MessageAlert({color, children}) {
    return (
        <Message negative>
            <Message.Header>ERROR</Message.Header>
            <p>{ children }</p>
      </Message>
    )
}

export default MessageAlert;
