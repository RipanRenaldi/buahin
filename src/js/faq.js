import "../assets/style/style.css"
import './component/header-bar.js'
import './component/footer-bar.js'

const buttonActive = document.querySelectorAll(".accordion");

window.addEventListener("load",()=>{
    buttonActive.forEach(accordion=>{
        console.log(accordion);
        accordion.addEventListener("click",()=>{
            accordion.classList.toggle("active");
            const icon = accordion.querySelector("svg path");
            if(accordion.classList.contains("active")){
                icon.setAttribute("d",`M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0
                256S114.6 512 256 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7
                24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z`)
            }
            else{
                icon.setAttribute("d",`M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z`)
            }
        })
    });

})