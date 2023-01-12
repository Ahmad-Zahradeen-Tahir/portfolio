import React from "react";
import "./About.css";
import pic from "../../Assets/me-about.jpg";
import { BiCodeAlt } from "react-icons/bi";
import { BiFootball } from "react-icons/bi";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { GiNinjaStar } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__left">
          <div className="about__me">
            <div className="about__me-image">
              <img src={pic} alt="about" />
            </div>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>

        <div className="about__content">
          <p>
            Hi there, I'm Zahradeen. I'm 18 years old and a self-taught
            programmer who loves to code in JavaScript. I started coding at{' '}
            <a href="www.freecodecamp.org">freecodecamp</a> in February 2022 and attended altschool, school of
            engineering. I love web development and am looking forward to learn
            more about front-end engineering.
          </p>
          <h2>Hobbies</h2>
          <div className="about__cards">
            <article className="about__card">
              <BiCodeAlt className="about__icon" />
              <h5>Coding</h5>
            </article>
            <article className="about__card">
              <BiFootball className="about__icon" />
              <h5>Football</h5>
            </article>
            <article className="about__card">
              <FaPlaneDeparture className="about__icon" />
              <h5>Travelling</h5>
            </article>
            <article className="about__card">
              <IoGameController className="about__icon" />
              <h5>Gaming</h5>
            </article>
            <article className="about__card">
              <GiBlackBook className="about__icon" />
              <h5>Reading</h5>
            </article>
            <article className="about__card">
              <GiNinjaStar className="about__icon" />
              <h5>Anime/manga</h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
