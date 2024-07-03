import React from 'react'
import './About.css'
import student from '../src/assets/student.jpg'

const About = () => {
  return (
    
   <section className='content'>
    <h1 className='about'>About</h1>
    <section className='line'>
     <div className='student'>
        <img src={student} alt=""/>
     </div>
    <div className='list'>
        <ul className='ul'>
            <li>
                <div className='work'>
                    <h2 className='topic1'>FrontEnd Developer</h2><br/>
                    <h3>I'm a frontend developer with experience 
                        in build and optimized web sites well.</h3><br/>
                    <h3>I'm a frontend developer with experience 
                    in build and optimized web sites well.</h3><br/><br/>
                    <h2 className='topic2'>BackEnd Developer</h2>
                    <h3>I'm a frontend developer with experience 
                        in build and optimized web sites well.</h3><br/>
                    <h3>I'm a frontend developer with experience 
                    in build and optimized web sites well.</h3><br/><br/>
                    <h2 className='topic3'> Database operater</h2>
                    <h3>I'm a frontend developer with experience 
                        in build and optimized web sites well.</h3><br/>
                    
                    <h3>I'm a frontend developer with experience 
                    in build and optimized web sites well.</h3><br></br>
                    <h2  className='topic4'>Mobile-App Developer</h2>
                    <h3>I'm a frontend developer with experience 
                        in build and optimized web sites well.</h3><br/>
                    <h3>I'm a frontend developer with experience 
                    in build and optimized web sites well.</h3><br/><br/>
                </div>

            </li>
            
        </ul>

    </div>
    </section>
    
   </section>
  )
}

export default About;
