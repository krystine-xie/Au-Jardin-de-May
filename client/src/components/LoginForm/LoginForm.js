// import React, { useState } from 'react'
// import axios from 'axios';
// import { Button, Form } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

// // import styles from './LoginForm.module.css';

// const LoginForm = (props) => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const loginHandler = async(e) => {
//         e.preventDefault();
//         const userLogin = {
//             email, 
//             password,
//         }

//         try {
//             const validLogin = await axios.post('http://localhost:8000/api/accounts/login');
//             const user = validLogin.data; 
//             console.log(user); 
//         }

//         catch(error) {
//             console.log(error); 
//         }
//     }


//     return (
//         <div className={styles.loginWrapper}>
//             <h1 className={styles.header}>Welcome</h1>
//             <Form 
//                 onSubmit={loginHandler}
//             >
//                 <Form.Field>
//                     <input 
//                         placeholder='Your Email' 
//                         type="text"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </Form.Field>
//                 <Form.Field>
//                     <input 
//                         type='password' 
//                         placeholder='Password' 
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </Form.Field>
//                 <Button 
//                     type="submit"
//                     as='a'
//                     href='/account'
//                 >
//                     LOG IN
//                 </Button>
//             </Form>

//             <p className={styles.noAccount}>Don't have an account? <Link to="/register" className={styles.link}>SIGN UP</Link></p>
    
        
//         </div>   
//     )  
// }

// export default LoginForm;