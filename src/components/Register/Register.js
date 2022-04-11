import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h3>Please Register.</h3>
            <form>
                <input type="text" name="" id="" placeholder='Name'/>
                <br />
                <input type="email" name="" id="" placeholder='Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;