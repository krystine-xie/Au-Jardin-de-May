import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

import styles from './Testimonials.module.css';

import { FormattedMessage } from "react-intl";

const Testimonials = (props) => {

    return (
        <Segment 
            basic 
            padded='very'
            className='testimonials'
        >
            <h3><FormattedMessage id="testimonials" /></h3>
            <div>
                <div className='testimonials'>
                    <div className={styles.rating}>
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    <p>- Charlie Brown</p>
                </div>
                <div className='testimonial'>
                    <div className={styles.rating}>
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                        <Icon name='star half' size='large' />
                    </div>
                    <p>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    <p>- Betty Boop</p>
                </div>
                <div className='testimonial'>
                    <div className={styles.rating}>
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                        <Icon name='star' size='large' />
                    </div>
                    <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                    <p>- Pepper Potts</p>
                </div>
            </div>
        </Segment>
            
    )

}

export default Testimonials;