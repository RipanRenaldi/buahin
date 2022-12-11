import "../assets/style/style.css";
import './component/header-bar.js'
import './component/footer-bar.js'

const SESSION_KEY = "pred"
const predImage = document.getElementById("pred-image")
const dataStorages = JSON.parse(sessionStorage.getItem(SESSION_KEY))
const sourceImage = dataStorages[3].sourceImage
const resultCards = document.querySelectorAll(".result-card")
predImage.setAttribute("src",sourceImage)

resultCards.forEach((card,index)=>{
    card.innerHTML = `
    <h2>${dataStorages[index].className}</h2>
    <p>${(dataStorages[index].probability * 100).toFixed(2)} %</p>`
})

const shadowBarElement = document.querySelector("header-bar")
const eventClick = (e)=>{
    let menu = e.target.parentElement
    menu.classList.toggle("hamburger")
    let ul = e.target.parentElement.nextElementSibling 
    ul.classList.toggle("slide")
    let li = ul.querySelectorAll("li");

    li.forEach(value=>{
        value.addEventListener("click",()=>{
            ul.classList.remove("slide")
            menu.classList.remove("hamburger")

        })
    })
}
shadowBarElement.setEvent = eventClick;