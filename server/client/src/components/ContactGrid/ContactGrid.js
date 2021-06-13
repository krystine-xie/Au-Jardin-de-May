import React from "react";
import { Grid, Icon, Form, Button } from "semantic-ui-react";

import styles from "./ContactGrid.module.css";

const ContactGrid = () => {
  return (
    <div className={styles.wrapper}>
      <Grid columns={2} divided>
        <Grid.Column>
          <div className={styles.contactWrapper}>
            <div className={styles.contact}>
              <Icon name="point" size="large" />
              <span>Hill Valley, California</span>
            </div>
            <div className={styles.contact}>
              <Icon name="phone" size="large" />
              <span>408-555-4385</span>
            </div>
            <div className={styles.contact}>
              <Icon name="mail" size="large" />
              <span>hello@jdm.com</span>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className={styles.form}>
            <h3>YOUR QUERIES</h3>
            <Form
              action="mailto:krystinex@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <Form.Field>
                <input name="name" placeholder="Your Name" />
              </Form.Field>
              <Form.Field>
                <input name="email" placeholder="Your Email" />
              </Form.Field>
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Your Message"
              />
              <Form.Field></Form.Field>
              <Button type="submit">Submit</Button>
              <Button type="reset">Reset</Button>
            </Form>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ContactGrid;
