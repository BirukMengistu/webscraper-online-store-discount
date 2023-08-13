import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav>
        <button className='primary'>Amazon</button>
       <button disabled className='primary'>Aliexpress</button>
       <button disabled className='primary'>ebay</button>
        </nav>
         <div> <h1>Best Deal for today</h1></div>
    </div>
  )
}

export default Nav
