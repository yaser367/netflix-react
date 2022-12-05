import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner-bottons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos delectus culpa vitae sit sunt magni qui labore adipisci laborum. Pariatur, sed ut. Ipsa, quod.</h1>
        </div> 
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner