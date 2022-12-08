import "../assets/style/style.css";
import pineapple from "../assets/images/pineapple.jpg"
import selfPhoto from "../assets/images/nophoto.jpg"
import ripanPhoto from "../assets/images/formal.jpeg"
import alfiPhoto from "../assets/images/alfi.jpg"
import sitiPhoto from "../assets/images/dina.jpg"
import reyPhoto from "../assets/images/Rey.jpg"

import {main} from "./view/main.js";

window.addEventListener("load",()=>{

    const fruit = document.getElementById("test");
    fruit.src = pineapple
    const svg = document.getElementById("svg");
    const ripan = document.querySelector("#ripan");
    const reynaldi = document.querySelector("#reynaldi");
    const alfi = document.querySelector("#alfi");
    const siti = document.querySelector("#siti");
    ripan.src=ripanPhoto;
    reynaldi.src=reyPhoto;
    alfi.src=alfiPhoto;
    siti.src=sitiPhoto;
    main();
    
})
