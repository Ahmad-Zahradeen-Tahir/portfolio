import React from "react";
import "./Portfolio.css";
import img1 from "../../Assets/portfolio1.jpg";
import img2 from "../../Assets/portfolio2.jpg";
import img3 from "../../Assets/portfolio3.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Rock-Paper-Scissors</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Ahmad-Zahradeen-Tahir/Rock-paper-scissors" target="_blank" className="btn">
              Github
            </a>
            <a href="http://rock-paper-scissors-umber-zeta.vercel.app/" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>Food Order App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Ahmad-Zahradeen-Tahir/food-app" target="_blank" className="btn">
              Github
            </a>
            <a href="https://food-app-rust-seven.vercel.app/" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>Calculator App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Ahmad-Zahradeen-Tahir/react-calculator" target="_blank" className="btn">
              Github
            </a>
            <a href="http://react-calculator-one-mu.vercel.app/" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
