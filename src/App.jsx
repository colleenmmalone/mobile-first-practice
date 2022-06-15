// import react from "react";

import fb from './assets/icon_fb.svg';
import tw from './assets/icon_tw.svg';

import pompadour from './assets/Marquise_de_Pompadour_1756.jpeg';
import colette from './assets/white-and-green.jpeg';

import './App.scss';

export default function App(){
    return(
        <>
            {/* <h1>Hello World</h1> */}
            <nav class="site-nav grid">
    <h1>Robes à la Françaises</h1>
    <ul>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <section id="welcome" class="grid">
    <div class="welcome-text">
      <h2>Dress Enthusiast<br />& Amateur Seamstress</h2>
      <p class="leading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo consequat.</p>
      <a href="#portfolio" class="button">View my work</a>
    </div>
    <div class="welcome-img">
      <img src={pompadour} className="flip" alt="mme de pompadour teal dress" />
    </div>
  </section>
  <section id="portfolio">
    <h3>Some Pretty Dresses</h3>
    <div class="projects grid">
      <a href="#">
        <img src={pompadour} alt="mme de pompadour teal dress" />
        <h4>Mme de Pompadour, 1765</h4>
      </a>
      <a href="#">
        <img src={colette} alt="white and green dress" />
        <h4>Colette, 1760</h4>
      </a>
      <a href="#">
        <img src={colette} alt="captain cosmo image" />
        <h4>Captain Cosmo Blog</h4>
      </a>

    </div>
  </section>
  <section id="skills">
    <h3>Things I Can Do</h3>
    <ul class="grid">
      <li>
        <img src={colette} alt="comet" />
        <h4>JavaScript</h4>
      </li>
      <li>
      <img src={colette} alt="comet" />
        <h4>React</h4>
      </li>
      <li>
      <img src={colette} alt="comet" />
        <h4>Firebase</h4>
      </li>
      <li>
      <img src={colette} alt="comet" />
        <h4>Flutter</h4>
      </li>
    </ul>
    <p class="leading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla lacus diam. Mauris fringilla consectetur nibh, sit amet tempus augue.</p>
  </section>
  <section id="contact">
    <h3>Get In Touch</h3>
    <p class="leading">Lorem ipsum dolor sit amet, consectetur.</p>
    <form>
      <input type="text" placeholder='Name' />
      <input type="email" placeholder='Email' />
      <textarea placeholder='Your Note'></textarea>
      <button class="button">Send Note</button>
    </form>
  </section>
  <footer>
    <div class="grid">
      <p class="copyright">Copyright 2020 Cosmo Junkie</p>
      <ul class="social">
        <li><a href="#"><img src={fb} alt="facebook" /></a></li>
        <li><a href="#"><img src={tw} alt="twitter" /></a></li>
      </ul>
    </div>
  </footer>
        </>
    )
}