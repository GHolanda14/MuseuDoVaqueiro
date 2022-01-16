let imagens = document.querySelectorAll('.foto');
let modal = document.querySelector('.modals');
let modalImg = document.querySelector("#modalImg");
let btnClose = document.querySelector("#btnClose");
let modalContents = document.querySelector(".modalContents");
let srcValor = "";

for(let i = 0; i < imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        srcValor = imagens[i].getAttribute('src');
        modalImg.setAttribute('src',srcValor);
        modal.classList.add('active');
    });
}

/*Fechar modal*/
btnClose.addEventListener('click',function(){
    modal.classList.remove('active');
});

window.addEventListener('click',function(event){
    if(event.target == modalContents){
        modal.classList.remove('active');
    }
});