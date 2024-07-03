import React from 'react'
import './HeroSection.css'
import person from '../src/assets/person.jpg'




const HeroSection = () => {
  return (
   <section className='container'>
    <div className='introduct'>
        <h1>Hello!!  I'm Thilan <span className='hasitha'>Hasitha</span></h1><br/><br/>
        <h2>I'm undergraduate student in SLIIT.I hope to learn about frontend and 
            backend web development with many frameworks React.js,Node.js,Angular etc.
             </h2><br/>
             <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Praesentium officia perferendis quae, vitae in velit 
                 sequi tenetur omnis at soluta laboriosam est assumenda 
                 dignissimos culpa illum exercitationem ipsa. Dignissimos, 
                 earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Praesentium officia perferendis quae, vitae in velit 
                 sequi tenetur omnis at soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Praesentium officia perferendis quae, vitae in velit 
                 sequi tenetur omnis at soluta laboriosam est assumenda 
                 dignissimos culpa illum exercitationem ipsa. Dignissimos, 
                 earum.</h4><br/><br/>

                 
    </div>
   
    <div className='picture'>
    <img src={person} alt=''/>
    <button className='btn'>Download My CV</button>
    </div>
   </section>
   
  )
}

export default HeroSection;
