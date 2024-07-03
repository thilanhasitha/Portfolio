import React from 'react'
import './Services.css'
import arrow_ from '../src/assets/arrow_.png'
import palette from '../src/assets/palette.png'
import android1 from '../src/assets/android1.png'

const Services = () => {
  return (
    <section className='services'>
      <h1 className='word1'>Latest  <span className='word2'>  Services</span></h1>
      
        <div className='services-container'>
            <div className='services-box'>
                <img className='pic1'src={arrow_} alt="arrow_"/>
                <h3>Web Development</h3>
                <p>Lorem Ipsum is simply dummy text of the printing
                   and typesetting industry. Lorem Ipsum has been the 
                   industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and
                   scrambled it to make a type specimen book. It has
                   survived not only five centuries, but also the leap
                   into electronic typesetting, remaining essentially unchanged.
                   It was popularised in the 1960s with the release of Letraset
                   sheets containing Lorem Ipsum passages, and more recently
                   with desktop publishing software like Aldus PageMaker
                   including versions of Lorem Ipsum.</p><br/><br/>
                <a href='#btn' className='btn'>Read More</a>
                

            </div>

            <div className='services-box'>
                <img className='pic2' src={palette} alt="palette"/>
                <h3>UI/UX Design</h3>
                <p>Lorem Ipsum is simply dummy text of the printing
                   and typesetting industry. Lorem Ipsum has been the 
                   industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and
                   scrambled it to make a type specimen book. It has
                   survived not only five centuries, but also the leap
                   into electronic typesetting, remaining essentially unchanged.
                   It was popularised in the 1960s with the release of Letraset
                   sheets containing Lorem Ipsum passages, and more recently
                   with desktop publishing software like Aldus PageMaker
                   including versions of Lorem Ipsum.</p><br/><br/>
                <a href='#btn' className='btn'>Read More</a>
                

            </div>
            
            <div className='services-box'>
                <img className='pic3'src={android1} alt="android1"/>
                <h3>Android Development</h3>
                <p>Lorem Ipsum is simply dummy text of the printing
                   and typesetting industry. Lorem Ipsum has been the 
                   industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and
                   scrambled it to make a type specimen book. It has
                   survived not only five centuries, but also the leap
                   into electronic typesetting, remaining essentially unchanged.
                   It was popularised in the 1960s with the release of Letraset
                   sheets containing Lorem Ipsum passages, and more recently
                   with desktop publishing software like Aldus PageMaker
                   including versions of Lorem Ipsum.</p><br/><br/>
                <a href='#btn' className='btn'>Read More</a>
                

            </div>

              
         </div>

      
    </section>
  )
}

export default Services;
