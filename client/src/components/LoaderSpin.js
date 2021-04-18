import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';


function LoaderSpin() {
    return (
        <div>
            <Segment>
                <Dimmer active inverted>
                    <Loader size='huge'>Loading...</Loader>
                </Dimmer>
            </Segment>            
        </div>
    )
}

export default LoaderSpin;
