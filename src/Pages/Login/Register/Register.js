import React from 'react';
import './Register.css'
import loginIcon from '../../../images/icon/login.ico'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault();
        console.log(event.target.email.value);
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '5px' }}>Please Register</h2>
            <form onSubmit={handleRegister} className='form'>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Email-Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input style={{backgroundColor: "antiqueWhite"}} type="submit" value="Register" />
                <div className=' d-flex justify-content-center align-items-center text-center'>

                    <div>
                        <img className='mx-1' height={25} src={loginIcon} alt="" />
                    </div>
                    <div className='register'>
                        Already have an Account?
                        <span style={{ cursor: "pointer" }} className='text-danger ' onClick={handleLogin}>Please Register</span>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Register;