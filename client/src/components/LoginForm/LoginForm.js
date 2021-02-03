import React from 'react'
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styles from './LoginForm.module.css';

const LoginForm = (props) => {

    return (
        <div className={styles.loginWrapper}>
            <h1 className={styles.header}>Welcome</h1>
            <Form>
                <Form.Field>
                    <input placeholder='Your Email' />
                </Form.Field>
                <Form.Field>
                    <input type='password' placeholder='Password' />
                </Form.Field>
                <Button 
                    as='a'
                    href='/account'
                >
                    LOG IN
                </Button>
            </Form>

            <p className={styles.noAccount}>Don't have an account? <Link to="/register" className={styles.link}>SIGN UP</Link></p>
    
        
        </div>   
    )  
}

export default LoginForm;