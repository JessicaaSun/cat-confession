"use strict"

let image = document.querySelector('#image');
let title = document.querySelector('#title');
let btnYes = document.querySelector('#btnYes');
let btnNo = document.querySelector('#btnNo');
let happySound = new Audio("./assets/happy-cat.mp3")
let sadSound = new Audio("./assets/crying-cat.mp3")

btnYes.addEventListener('click', () => {
    image.src = "./assets/happy-cat-happy-happy-cat.gif"
    title.innerHTML = "Aww I love you too 😘"
    sadSound.pause()
    happySound.play()
    happySound.loop = true
})

let btnYesScale = 1;
let btnNoScale = 1;

btnNo.addEventListener('click', () => {
    image.src = "https://media.tenor.com/UNaQFutfOF0AAAAi/banana-crying-cat.gif"
    title.innerHTML = "Oh no, please click yes"
    happySound.pause()
    sadSound.play()
    sadSound.loop = true
    btnNoScale -= 0.1;
    btnYesScale += 0.1;
    btnNo.style.transform = `scale(${btnNoScale})`
    btnYes.style.transform = `scale(${btnYesScale})`
});
