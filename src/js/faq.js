import "../assets/style/style.css"
import './component/header-bar.js'
import './component/footer-bar.js'
import './component/faq/faq-details-section.js'
import { main } from "./view/main"

const shadowBarElement = document.querySelector("header-bar")
const eventClick = (e)=>{
    e.target.parentElement.classList.toggle("hamburger")
    let ul = e.target.parentElement.nextElementSibling 
    ul.classList.toggle("slide")
    let li = ul.querySelectorAll("li");

    li.forEach(value=>{
        value.addEventListener("click",()=>{
            ul.classList.remove("slide")
        })
    })
}
shadowBarElement.setEvent = eventClick;

document.addEventListener("DOMContentLoaded",main)