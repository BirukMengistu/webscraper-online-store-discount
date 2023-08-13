import React from 'react'
import logodeal from '../logodeal.png'
const Header = () => {
  const Today = new Date().toString().slice(0,16)
  return (
    <header>
      <div className='text-container'>
      <h2>Deals for today</h2>
      <p>{Today}</p>
      </div>
       
      <div className='logo-container'>
        <img  src={logodeal} alt='log' />
      </div>
    </header>
  )
}

export default Header
