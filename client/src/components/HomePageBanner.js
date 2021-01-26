import React from 'react'; 
import styles from './HomePageBanner.module.css';
import { Header, Button } from 'semantic-ui-react';

const HomePageBanner = props => {

    return (
        <div className={styles.showcase}>
            <div>
                <h1
                    className={styles.showcaseHeader}
                >
                FLOWER & SUCCULENT
                </h1>
                <h1
                    className={styles.showcaseHeader2}
                >
                ARRANGEMENTS
                </h1>
                <h3
                    className={styles.showcaseSubHeader}
                >
                    A flower shop focused on delivering contemporary & customisable floral pieces for all occasions!
                </h3>
                <br />
                <br />
                <Button
                    size='huge'
                >
                    SHOP NOW
                </Button>


            </div>
            
        </div>
    )

}

export default HomePageBanner;