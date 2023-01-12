import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { BiLoader } from 'react-icons/bi'
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My skills</h2>
      <div className="container experience__container">
        <Fade left>
        <div className="experience__skills">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4>HTML</h4></div>
            </article>
            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4>CSS</h4></div>
            </article>
            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4>JavaScript</h4></div>
            </article>
            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4>React</h4></div>
            </article>
            <article className='experience__details' >
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4>Git</h4></div>
            </article>
          </div>
        </div>
        </Fade>
        <Fade right>
        <div className="experience__learning">
        <h3>Currently learning</h3>
          <div className="experience__content">
            <article className='experience__details' >
              <BiLoader className='experience__details-icon'/>
              <div><h4>React native</h4></div>
            </article>
            <article className='experience__details' >
              <BiLoader className='experience__details-icon'/>
              <div><h4>Vue</h4></div>
            </article>
            <article className='experience__details' >
              <BiLoader className='experience__details-icon'/>
              <div><h4>Tailwind</h4></div>
            </article>
            <article className='experience__details' >
              <BiLoader className='experience__details-icon'/>
              <div><h4>TypeScript</h4></div>
            </article>
            <article className='experience__details' >
              <BiLoader className='experience__details-icon'/>
              <div><h4>Next.js</h4></div>
            </article>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  )
}

export default Experience
