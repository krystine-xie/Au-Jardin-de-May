import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import styles from './LoginForm.module.css';

import { register } from '../actions/userActions';

import MessageAlert from '../components/MessageAlert';
import LoaderSpin from '../components/LoaderSpin';

const RegisterPage = ({location, history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const dispatch = useDispatch(); 

    const userRegister = useSelector(state => state.userRegister); 
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const registerHandler = (e) => {
        e.preventDefault(); 

        if (password !== confirmPassword) {
            setMessage('Passwords do not match!')
        } else {
            dispatch(register(name, email, password));
        }
    }
 
    return (
        <div className={styles.loginWrapper}>
            <h1 className={styles.header}>CREATE ACCOUNT</h1>
            {message && <MessageAlert color='red'>{message}</MessageAlert>}
            {error && <MessageAlert color='red'>{error}</MessageAlert>}
            {loading && <LoaderSpin />}
            <Form
                onSubmit={registerHandler}
            
            >
                <Form.Field>
                    <input 
                        required
                        placeholder="Full Name" 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        required
                        placeholder="Your Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        required
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        required
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Field>
                <Button type="submit">REGISTER</Button>
            </Form>

            <p className={styles.noAccount}>Have an account? <Link to={redirect ? `/login?${redirect}` : '/login'} className={styles.link}>SIGN IN</Link></p>
            <p className={styles.noAccount}><Link to="/store" className={styles.link}>RETURN TO STORE</Link></p>
    
        
        </div>   
    )  

}

export default withRouter(RegisterPage);