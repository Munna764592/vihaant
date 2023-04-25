import React from 'react'

const RegisterPage = ({change,show}) => {
  return (
    
    <>
        
        <form className="form contact-form">
      <h5>Register</h5>
      <div className="form-row">
        <label for="username" className="form-label">username</label>
        <input type="text" className="form-input username-input" />
      </div>
      <div className="form-row">
        <label for="email" className="form-label">Email</label>
        <input type="email" className="form-input email-input" />
      </div>
      <div className="form-row">
        <label for="password" className="form-label">password</label>
        <input type="password" className="form-input password-input" />
      </div>

      <div className="form-row">
        <label for="confirm-password" className="form-label">Confirm Password</label>
        <input type="password" className="form-input password-input2" />
      </div>
      <div className="text-small form-alert">there was an error</div>

      <div className="pass-match mismatch-alert">Password does not match</div>

      <button type="submit" className="btn btn-block">submit</button>
    </form>
    <div className="login-ask" onClick={()=>change(!show)}>Already Have an Account? Login Here</div>
    
    </>
  )
}

export default RegisterPage