import React from 'react'

const Login = ({handleLogin}) => {
  return (
    <div>
      <h2>Please log into your Full-List account</h2>
      <form>
        <input 
        type= "text"
        placeholder= "Username"
        />
        <input 
        type= "password"
        placeholder= "Password"
        />
        <button type="submit" onClick={handleLogin}> Log in </button>
      </form>
    </div>
  )
}

export default Login