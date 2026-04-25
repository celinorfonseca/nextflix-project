



let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")


// Config Video as button to unmute*

document.addEventListener('DOMContentLoaded',function(){
const video = document.querySelector('.video');

video.addEventListener('click',function(){
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
});
});

//  Modal for More information button

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}

document.addEventListener('DOMContentLoaded', function () {

    const linha = document.querySelector('.linha-filmes');

});

function moveresquerda() {
    const linha = document.querySelector('.linha-filmes');
    linha.scrollLeft -= 300;
}

function moverdireita() {
    const linha = document.querySelector('.linha-filmes');
    linha.scrollLeft += 300;
}

// TUDUM Efect Sound when Clicking everywhere.

document.addEventListener('DOMContentLoaded', function () {

    const audio = document.getElementById('tudum');
    let played = false;

    document.addEventListener('click', function () {

        if (!played) {
            audio.play();
            played = true;
        }

    });

});

