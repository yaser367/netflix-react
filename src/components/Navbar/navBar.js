import React from 'react'
import './navBar.css'
const navBar = () => {
    const navItem = [
        'Home','Tv Shows','Movies','New&Popular','My List'
    ]
  return (
    <div className='navbar'>
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
    {/* <div className='items'>
    <ul className='navItems'>
        {navItem.map((items)=>
        <li className='navItem'>{items}</li>
        )}
    </ul>
    </div> */}
    
 
    
  
    <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>

  )
}

export default navBar