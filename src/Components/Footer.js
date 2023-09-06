import './Footer.css';
import Github from "../assets/github-mark-white.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkin.png";
import Twitter from "../assets/twitter.png";
import Gmail from "../assets/gmail.png";

const Footer = () => {
    return(
        <footer>
             {/* <div data-aos="fade-up" class="horizontaldiv"></div> */}

<div data-aos="fade-up" class="tributendsocials">
  <div class="socials">
    <div class="divsoc">
      <a href="https://github.com/paulanny" class="soca">
        <img src={Github} alt="github" />
      </a>
    </div>

    <div class="divsoc">
      <a href="mailto:paulanimashaun20@gmail.com" class="soca">
        <img src={Gmail} alt="gmail" />
      </a>
    </div>

    <div class="divsoc">
      <a href="https://www.instagram.com/grace_beneficiary" class="soca">
        <img src={Instagram} alt="instagram" />
      </a>
    </div>
    <div class="divsoc">
      <a href="www.linkedin.com/in/animashaun-paul" class="soca">
        <img src={LinkedIn} alt="Linkedin" />
      </a>
    </div>
    <div class="divsoc">
      <a href="https://twitter.com/animashaun_paul" class="soca">
        <img src={Twitter} alt="twitter" />
      </a>
    </div>
  </div>
  <div class="referencep">
    <p class="ref">Developed by Paul Anny</p>
    <p></p>
  </div>
</div>
<p className='copyright'>© Copyright 2023, All Rights Reserved. </p>
</footer>
    )
}

export default Footer;