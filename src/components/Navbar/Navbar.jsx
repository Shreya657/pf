import React from 'react'
import './Navbar.css'
import About from '../About/About'


const Navbar = () => {
  function navigate(){
    window.location.href="#contact";
  }
  return (
    <>
      <nav className="navbar">

        <div className="items">
        
        <img  className='icon' src="https://tse3.mm.bing.net/th?id=OIP.a-5MmTIP6FU2C0nVgUlheAHaHa&pid=Api&P=0&h=220" alt="Bubbles fonts"/>
        
        

            <ul>
                <li><a className='item' href="#home">Home</a></li>
                <li><a className='item' href="#about"> About</a></li>
                <li><a  className='item'href="#skill">Skills</a></li>
                <button className='contact' onClick={navigate} >Contact me</button>
               
            </ul>
           
        </div>
      </nav>
    </>
  )
}

export default Navbar