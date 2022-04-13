import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import newIcon from '../../../images/add-user.ico'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    const handleRegister = event => {
        navigate('/register')
        
    }

    return (
        <div className=' form container w-50 mt-2 mx-auto'>
            <h2 className='text-center text-primary'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div className='or'>
                    <div className='divider'></div>
                    <p className='mt-2'>or</p>
                    <div className='divider'></div>
                </div>
                <div className=' d-flex justify-content-center align-items-center text-center'>

                    <div>
                        <img className='mx-1' height={25} src={newIcon} alt="" />
                    </div>
                    <div>
                        New to Genius car?
                        <span style={{ cursor: "pointer" }} className='text-danger' onClick={handleRegister}>Please Register</span>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Login;