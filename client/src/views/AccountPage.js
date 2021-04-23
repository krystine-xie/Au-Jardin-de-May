import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Segment, Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import styles from './ProductPage.module.css';
import { getUserDetails, updateUserDetails } from '../actions/userActions';
import { USER_PROFILE_UPDATE_RESET } from '../constants/userConstants'

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

    const userUpdate = useSelector(state => state.userUpdate);
    const { success } = userUpdate;

    useEffect(() => {
        if (!user) {
            history.push('/login')
        } else {
            // checks if user details have been fetched yet or if update was successful!
            if (!user || !user.name || success) {
                // makes sure we clear our previous state first 
                dispatch({
                    type: USER_PROFILE_UPDATE_RESET
                })

                // fetches the update user details
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }

    }, [dispatch, history, userInfo, user, success])

    const updateHandler = (e) => {
        e.preventDefault(); 

        if (password !== confirmPassword) {
            setMessage('Passwords do not match!')
        } else {
            dispatch(updateUserDetails({
                'id':user._id,
                'name': name,
                'email': email,
                'password': password
            }));
        }
    }

    return (
        <Segment>
            <div className={styles.cartWrapper}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <h2>USER PROFILE</h2>
                            {message && <MessageAlert color='red'>{message}</MessageAlert>}
                            {error && <MessageAlert color='red'>{error}</MessageAlert>}
                            {loading && <LoaderSpin />}
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
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <input 
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