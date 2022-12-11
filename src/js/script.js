import "../assets/style/style.css";
import './component/header-bar.js';
import './component/footer-bar.js';
import './component/index/overview-section.js';
import './component/index/faq-section.js';
import './component/index/profile-section.js';
import { main } from "./view/main.js";

import pineapple from "../assets/images/pineapple.jpg";
import profile1 from "../assets/images/profile/Ripan.jpeg";
import profile2 from "../assets/images/profile/Rey.jpg";
import profile3 from "../assets/images/profile/Alfi.jpg";
import profile4 from "../assets/images/profile/Dina.jpg";

window.addEventListener("load", () => {
  document.getElementById("test").src = pineapple;
  document.getElementById("user-ripan").src = profile1;
  document.getElementById("user-reynaldi").src = profile2;
  document.getElementById("user-alfi").src = profile3;
  document.getElementById("user-siti").src = profile4;
});

document.addEventListener('DOMContentLoaded', main);