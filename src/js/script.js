import "../assets/style/style.css";
import pineapple from "../assets/images/pineapple.jpg";
import ripanPhoto from "../assets/images/profile/Ripan.jpeg";
import alfiPhoto from "../assets/images/profile/Alfi.jpg";
import sitiPhoto from "../assets/images/profile/Dina.jpg";
import reyPhoto from "../assets/images/profile/Rey.jpg";
// import selfPhoto from "../assets/images/nophoto.jpg";

import './component/overview-section.js';
import './component/faq-section.js';
import './component/profile-section.js';
import { main } from "./view/main.js";

window.addEventListener("load", () => {
  const fruit = document.getElementById("test");
  fruit.src = pineapple;
  const svg = document.getElementById("svg");
  const ripan = document.getElementById("user-ripan");
  const reynaldi = document.getElementById("user-reynaldi");
  const alfi = document.getElementById("user-alfi");
  const siti = document.getElementById("user-siti");
  ripan.src = ripanPhoto;
  reynaldi.src = reyPhoto;
  alfi.src = alfiPhoto;
  siti.src = sitiPhoto;
  main();
});
