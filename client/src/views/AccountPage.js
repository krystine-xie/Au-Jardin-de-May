import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Segment, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import styles from './ProductPage.module.css';
import { getUserDetails } from '../actions/userActions';

import MessageAlert from '../components/MessageAlert';
import LoaderSpin from '../components/LoaderSpin';

const AccountPage = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch(); 

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails; 

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin; 

    useEffect(() => {
        if (!user) {
            history.push('/login')
        } else {
            // checks if user details have been fetched yet
            if (!user || !user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }

    }, [dispatch, history, userInfo, user])

    const updateHandler = (e) => {
        e.preventDefault(); 

        if (password !== confirmPassword) {
            setMessage('Passwords do not match!')
        } else {
            console.log('Updating profile...')
        }
    }

    return (
        <Segment>
            <div className={styles.cartWrapper}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <h2>USER PROFILE</h2>
                            <Form
                                onSubmit={updateHandler}
                            
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
                                <Button type="submit">UPDATE DETAILS</Button>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <h2>MY ORDERS</h2>
                        
                        </Grid.Column>
                    
                    </Grid.Row>
                </Grid>
            </div>
        </Segment>
    )

}

export default withRouter(AccountPage);