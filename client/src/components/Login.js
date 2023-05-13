import React from 'react'

const Login = () => {
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
        <button type="submit"> Log in </button>
      </form>
    </div>
  )
}

export default Login