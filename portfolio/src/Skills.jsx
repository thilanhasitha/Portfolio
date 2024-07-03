import React from 'react'
import './Skills.css'
import html from '../src/assets/html.png'
import css from '../src/assets/css.png'
import js from '../src/assets/js.png'
import java1 from '../src/assets/java1.png'
import node from '../src/assets/node.png'
import sql from '../src/assets/sql.png'
import android from '../src/assets/android.png'
import flutter from '../src/assets/flutter.png'
import R from '../src/assets/R.png'


const Skills = () => {
  return (
    <div className='title'>
      <h1 className='title1'>Skills</h1>
      <section className='images-all'>
         <div className='column1'>
            <div className='icon1'>
              <img src={html}alt='html'/>
            </div>
            <div className='icon2'>
              <img src={css}alt='css'/>
            </div>
            <div className='icon3'>
              <img src={js}alt='js'/>
            </div>
            <div className='icon4'>
              <img src={java1}alt='java'/>
            </div>
            <div className='icon5'>
              <img src={node}alt='node'/>
            </div>
          </div>
          <div className='column2'>
              <div className='icon6'>
                <img src={sql} alt="sql"/>

              </div>
              <div className='icon7'>
                <img src={android} alt="android"/>

              </div>
              <div className='icon8'>
                <img src={flutter} alt="flutter"/>

              </div>

          <div className='column3'>
              <div className='icon9'>
                <img src={R} alt="R"/>

              </div>

          </div>

          </div>

       
          
      </section>
    </div>
    
  )
}

export default Skills;

