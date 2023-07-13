import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {GiAchievement} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiAchievement />
              <h5>Experience</h5>
              <small>3+years Exp</small>
            </article>
            
            <article className='about__card'>
              <GiAchievement />
              <h5>Experience</h5>
              <small>3+years Exp</small>
            </article>

            <article className='about__card'>
              <GiAchievement />
              <h5>Experience</h5>
              <small>3+years Exp</small>
            </article>
          </div>

          <div >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut, ipsam rem a, fugit rerum blanditiis architecto, ducimus voluptatem ab dolorum? Voluptates ipsa obcaecati 
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About