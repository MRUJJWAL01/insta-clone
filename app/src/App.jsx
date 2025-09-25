import React from 'react'
import AppRouter from './approuter/AppRouter'
import ForgotPass from './component/authComponent/ForgotPass'

const App = () => {
  return (
    <div className='h-screen '>
      <AppRouter />
      {/* <ForgotPass /> */}
    </div>
  )
}

export default App