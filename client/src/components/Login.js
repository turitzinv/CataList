import React from 'react'

const Login = ({handleLogin, setUsername, setPassword, username, password}) => {
  return (
    <div>
      <h2>Please log into your Full-List account</h2>
      <form id="login-form" onClick={handleLogin}>
        <input 
        className="login-input"
        type= "text"
        placeholder= "Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        />
        <input 
        className="login-input"
        type= "password"
        placeholder= "Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        <button type="submit"> Log in </button>
      </form>
    </div>
  )
}

export default Login