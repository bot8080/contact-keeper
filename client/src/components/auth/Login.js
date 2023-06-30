import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user;

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log("Login Successful")
    }

    return (
        <div className='form-container'>

            <h1>Account Login</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Enter your Email address" name='email' value={email} onChange={onChange}></input>
                </div>

                <div className='form-group'>
                    <label htmlFor='password'>Password: </label>
                    <input type="text" placeholder="Enter your password" name='password' value={password} onChange={onChange}></input>
                </div>
                
            </form>

            <input type="submit" className="btn btn-primary btn-block" value="Register" />
        </div>

    )
}

export default Login