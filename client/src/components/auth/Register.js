import React, { useState } from 'react'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user;

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log("Register Successful")
    }

    return (
        <div className='form-container'>

            <h1>Account Register</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" placeholder="Enter your name" name='name' value={name} onChange={onChange}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Enter your Email address" name='email' value={email} onChange={onChange}></input>
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Password: </label>
                    <input type="text" placeholder="Enter your password" name='password' value={password} onChange={onChange}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password2">Confirm Password: </label>
                    <input type="text" placeholder="Confirm your password" name='password2' value={password2} onChange={onChange}></input>
                </div>
            </form>


            <input type="submit" className="btn btn-primary btn-block" value="Register" />
        </div>

    )
}

export default Register