import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='login-container'>
      <input type="checkbox" id="show" />
      <label for="show" className="show-btn">Login</label>

      <div className='container'>
        <label for="show" className='close-btn' title="close">&times;</label>
            <label>Email:</label>
            <input type="text" />
            <label>Lösenord</label>
            <input type="text" />
            <a href="#">Glömt lösenord?</a>
            <button>Submit</button>
            <div className='link'>Inte medlem? <a href='#'> Registrera dig</a></div>

      </div>
    </div>
  )
}

export default LoginForm