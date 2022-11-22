import "../assets/style/style.css";
import pineapple from "../assets/images/pineapple.jpg"
import selfPhoto from "../assets/images/nophoto.jpg"
import {main} from "./view/main.js";


const fruit = document.getElementById("test");
fruit.src = pineapple

const ripan = document.querySelector("#ripan");
const reynaldi = document.querySelector("#reynaldi");
const alfi = document.querySelector("#alfi");
const siti = document.querySelector("#siti");
ripan.src=selfPhoto;
reynaldi.src=selfPhoto;
alfi.src=selfPhoto;
siti.src=selfPhoto;


main();