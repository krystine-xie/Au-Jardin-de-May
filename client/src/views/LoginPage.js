import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { withRouter, Link} from 'react-router-dom';
import { login } from '../actions/userActions';

import MessageAlert from '../components/MessageAlert';
import LoaderSpin from '../components/LoaderSpin';

import styles from './LoginForm.module.css';

const LoginPage = ({location, history}) => {

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector(state => state.userLogin);

    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        } 
    }, [history, userInfo, redirect]);

    return (
        <div>
            <div className={styles.loginWrapper}>
                <h1 className={styles.header}>Welcome</h1>
                {error && <MessageAlert color='red'>{error}</MessageAlert>}
                {loading && <LoaderSpin />}
                <Form 
                    onSubmit={loginHandler}
                >
                    <Form.Field>
                        <input 
                            placeholder='Your Email' 
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input 
                            type='password' 
                            placeholder='Password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Field>
                    <Button 
                        type="submit"
                    >
                        LOG IN
                    </Button>
                </Form>

                <p className={styles.noAccount}>Don't have an account? <Link to={redirect ? `/register?${redirect}` : '/register'} className={styles.link}>SIGN UP</Link></p>
            </div>   
        </div>
    )

}

export default withRouter(LoginPage);