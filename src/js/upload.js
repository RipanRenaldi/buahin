import "../assets/style/style.css";
import fruit from "../assets/images/pineapple.jpg";
import number1 from "../assets/images/number1.png";
import number2 from "../assets/images/number2.png";
import number3 from "../assets/images/number3.png";
import number4 from "../assets/images/number4.png";
import * as tf from "@tensorflow/tfjs";


const TARGET_CLASSES = {
    0: "Apel Envy",
    1:"Apel Malang",
    2:"Lemon California",
    3:"Mangga Harumanis",
    4:"Pisang Cavendish",
    5:"Pisang Kepok",
    6:"Semangka Merah",
}

window.addEventListener("load",()=>{
    const rightImage = document.getElementById("right-image");
    const numberone = document.getElementById("no-1");
    const numbertwo = document.getElementById("no-2");
    const numberthree = document.getElementById("no-3");
    const numberfour = document.getElementById("no-4");
    rightImage.src=fruit;
    numberone.src = number1;
    numbertwo.src = number2;
    numberthree.src = number3;
    numberfour.src = number4;
})
let model;
const init = async()=>{
    console.log("Load Model");
    model = await tf.loadLayersModel("./tfjsmodel/model.json");
    console.log("Model Loaded");
    
}

init();

const formInput = document.querySelector("#form-input");
const inputFile = document.querySelector("#input-file");
const imageInput = document.querySelector("#image-input");
const predictButton = document.querySelector(".button-start");
const imageWrapper = document.querySelector(".image");

formInput.addEventListener("click",(e)=>{
    inputFile.click();
    e.target.addEventListener("change",async ({target})=>{
        let file = target.files[0];
        const reader = new FileReader();

        reader.addEventListener("load",()=>{
            imageInput.setAttribute("src",reader.result);
        })
        reader.readAsDataURL(file);
    })
})
predictButton.addEventListener("click",async()=>{
    const result = await predict(imageInput);
    console.log(result);
    const test = Array.from(result).map((p,i)=>{
        return {
            probability : p,
            className : TARGET_CLASSES[i]
        }
    })
    console.log(test);
})

const predict = (input)=>{
    console.log(input);
    const tensor = tf.browser.fromPixels(input)
    .resizeNearestNeighbor([200,200])
    .toFloat()
    .div(tf.scalar(255.0))
    .expandDims();

    const history = model.predict(tensor);
    return history.data();
}