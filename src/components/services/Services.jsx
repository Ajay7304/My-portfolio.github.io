import React from "react";
import "./services.css";
import { PiCheckFatBold } from "react-icons/pi";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>

          <ul className="service__list">
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <PiCheckFatBold className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
