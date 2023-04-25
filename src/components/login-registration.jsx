import React from 'react'
import RegisterPage from './registerPage'
import LoginPage from './loginPage'
const LoginRegister = () => {
    var [show,changeview]=React.useState(true)
  return (
    <>

    <div className='backlog'></div>
    <div className='backlog2'></div>
<div className='dddd'>

        {show?<LoginPage change={changeview} show={show}/>:<RegisterPage change={changeview} show={show}/>}
</div>

    </>
  )
}

export default LoginRegister