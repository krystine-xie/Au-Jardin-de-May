import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

function LoaderSpin() {
  return (
    <div>
      <Segment>
        <Dimmer active inverted>
          <Loader size="huge">
            <FormattedMessage id="loading" />
          </Loader>
        </Dimmer>
      </Segment>
    </div>
  );
}

export default LoaderSpin;
