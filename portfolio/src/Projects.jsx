import React from 'react'
import './Projects.css'
import screen1 from '../src/assets/screen1.jpg'
import screen2 from '../src/assets/screen2.jpg'
import screen3 from '../src/assets/screen3.jpg'

const Projects = () => {
  return (
    <section className='projects'>
      <h1 className='word1'>Latest <span className='word2'>Projects</span></h1>
      <div className='projects-container'>
        <div className='projects-box'>
          <img className='picture1' src={screen1} alt=''/>
          <h3 className='title1'>Project A</h3>
          <h4 className='desciption1'>This is a project made to learn the
            latest languages by building an app.
          </h4><br/><br/>
          <div className='components1'>
            <h3>React</h3>
            <h3>Node</h3>
            <h3>Express</h3>
            <h3>MongoDB</h3>
          </div><br/>
          <div className='btn-section'>
            <button className='btn1'><a href='#'>Source</a></button>
            <button className='btn2'><a href='#'>Demo</a></button>
          </div>


        </div>

        <div className='projects-box'>
          <img className='picture2' src={screen2} alt=''/>
          <h3 className='title2'>Project B</h3>
          <h4 className='desciption2'>This is a project made to learn the
            latest languages by building an app.
          </h4><br/><br/>
          <div className='components2'>
            <h3>Html</h3>
            <h3>Css</h3>
            <h3>Php</h3>
            <h3>Sql</h3>
          </div><br/>
          <div className='btn-section'>
            <button className='btn1'><a href='#'>Source</a></button>
            <button className='btn2'><a href='#'>Demo</a></button>
          </div>


        </div>

        <div className='projects-box'>
          <img className='picture3' src={screen3} alt=''/>
          <h3 className='title3'>Project C</h3>
          <h4 className='desciption3'>This is a project made to learn the
            latest languages by building an app.
          </h4><br/><br/>
          <div className='components3'>
            <h3>Kotlin</h3>
            <h3>Android Studio</h3>
            <h3>Sqlite</h3>
             
          </div><br/>
          <div className='btn-section'>
            <button className='btn1'><a href='#'>Source</a></button>
            <button className='btn2'><a href='#'>Demo</a></button>
          </div>


        </div>

        <div className='projects-box'>
          <img className='picture3' src={screen3} alt=''/>
          <h3 className='title3'>Project D</h3>
          <h4 className='desciption3'>This is a project made to learn the
            latest languages by building an app.
          </h4><br/><br/>
          <div className='components3'>
            <h3>Kotlin</h3>
            <h3>Android Studio</h3>
            <h3>Sqlite</h3>
             
          </div><br/>
          <div className='btn-section'>
            <button className='btn1'><a href='#'>Source</a></button>
            <button className='btn2'><a href='#'>Demo</a></button>
          </div>


        </div>

        <div className='projects-box'>
          <img className='picture3' src={screen3} alt=''/>
          <h3 className='title3'>Project E</h3>
          <h4 className='desciption3'>This is a project made to learn the
            latest languages by building an app.
          </h4><br/><br/>
          <div className='components3'>
            <h3>Kotlin</h3>
            <h3>Android Studio</h3>
            <h3>Sqlite</h3>
             
          </div><br/>
          <div className='btn-section'>
            <button className='btn1'><a href='#'>Source</a></button>
            <button className='btn2'><a href='#'>Demo</a></button>
          </div>


        </div>

      </div>

     

    </section>
  )
}

export default Projects;
