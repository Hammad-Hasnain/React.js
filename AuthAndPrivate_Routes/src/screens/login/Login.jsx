import React from 'react'

const Login = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
            <h1>Login</h1>
            <br />
            <h3>Change URL endpoint and see changes</h3>
            <br />
            <ul>
                <li>http://localhost:5173/</li>
                <li>http://localhost:5173/about</li>
                <li>http://localhost:5173/contact</li>
                <li>http://localhost:5173/signup</li>
                <li>http://localhost:5173/abc</li>
            </ul>
        </div>

    )
}

export default Login