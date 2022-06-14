// import react from "react";

import './App.scss';

export default function App(){
    return(
        <>
            {/* <h1>Hello World</h1> */}
            <nav class="site-nav grid">
    <h1>Stitchineer</h1>
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
      {/* <img src="assets/banner_image.png" alt="pic of planet" /> */}
    </div>
  </section>
  <section id="portfolio">
    <h3>Some of my Projects</h3>
    <div class="projects grid">
      <a href="#">
        {/* <img src="assets/project_1.png" alt="space race image" /> */}
        <h4>Space Race Game</h4>
      </a>
      <a href="#">
        {/* <img src="assets/project_2.png" alt="planet boy image" /> */}
        <h4>Planet Boy API</h4>
      </a>
      <a href="#">
        {/* <img src="assets/project_3.png" alt="captain cosmo image"> */}
        <h4>Captain Cosmo Blog</h4>
      </a>

    </div>
  </section>
  <section id="skills">
    <h3>Things I Can Do</h3>
    <ul class="grid">
      <li>
        {/* <img src="assets/comet_1.svg" alt="comet"> */}
        <h4>JavaScript</h4>
      </li>
      <li>
        {/* <img src="assets/comet_2.svg" alt="comet"> */}
        <h4>React</h4>
      </li>
      <li>
        {/* <img src="assets/comet_3.svg" alt="comet"> */}
        <h4>Firebase</h4>
      </li>
      <li>
        {/* <img src="assets/comet_4.svg" alt="comet"> */}
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
        {/* <li><a href="#"><img src="assets/icon_fb.svg" alt="facebook"></a></li> */}
        {/* <li><a href="#"><img src="assets/icon_tw.svg" alt="twitter"></a></li> */}
      </ul>
    </div>
  </footer>
        </>
    )
}