import React from 'react'
import './Home.css'
// import Men from './th-removebg-preview.png'
import About from '../About/About'
const Home = ({darkMode}) => {
  // function scroll(){
  //   const aboutSection=document.getElementById('about');
  //   aboutSection.scrollIntoView({behavior:'smooth'});
  // }
  function navigate(){
    window.location.href="#about";
  }
  return (
    <section className={`intro ${darkMode ? 'dark' : ''}`}>


        <div className="introduction">
            <span className={`hello ${darkMode ? 'dark' : ''}`}>hello,</span>
            <span className={`im ${darkMode ? 'dark' : ''}`}>
                I'm <span className={`name ${darkMode ? 'dark' : 'light'}`}>
    {
      "Shreya".split("").map((char, index) => (
        <span className="letter" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
          {char}
        </span>
      ))
    }
     {" "}
    {
      "Bera".split("").map((char, index) => (
        <span className="letter" style={{ animationDelay: `${(index + 6) * 0.1}s` }} key={index + 6}>
          {char}
        </span>
      ))
    }
  </span> 


<br />Frontend Developer</span>
  
            <p className= {`para ${darkMode ? 'dark' : ''}`}>I’m a passionate Frontend Developer with a creative mindset and strong problem-solving skills. Currently a B.Tech CSE fresher, I build responsive and user-friendly interfaces, while actively working toward becoming a Full-Stack Developer.</p>
         
            <button className='btn' onClick={navigate} >more about me</button>
            <div className="cls"><a href="https://www.linkedin.com/in/shreya-bera-978878307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">  <img className='socialIcon' src="https://tse2.mm.bing.net/th?id=OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa&pid=Api&P=0&h=220" alt="" /></a>
    <a href="https://x.com/esbi2049"><img className='socialIcon' src="https://tse2.mm.bing.net/th?id=OIP.8aNlzkh1KyDMb3mOEbs9BgHaHa&pid=Api&P=0&h=220"   alt="" /></a>
    <a href="https://github.com/Shreya657"><img  className='socialIcon' src="https://tse1.mm.bing.net/th?id=OIP.CFuLkytnVAFEdRjrKlwl_QHaHa&pid=Api&P=0&h=220"  alt="" /></a>
    
    </div>   
        </div>
        <div className='dp'>
             <img  className='picture'src="\WhatsApp Image 2025-04-30 at 01.39.24_7c47a6ae.jpg" alt=""  /> </div>
             

    </section>
    

  )
}

export default Home