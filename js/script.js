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
        btnReposition();
    });
}

/*Posicionar o botão de fechar imagem com responsividade*/
let btnReposition = function(){
    btnClose.style.top = `${modalImg.offsetTop}px`;
    btnClose.style.left = `${modalImg.offsetLeft + modalImg.offsetWidth - 40}px`;
}

window.addEventListener('resize',function(){
    btnReposition();
});

/*Fechar modal*/
btnClose.addEventListener('click',function(){
    fecharModal();
    diminuirImagem();
});

window.addEventListener('click',function(event){
    if(event.target == modalContents){
        fecharModal();
        diminuirImagem();
    }
});

let fecharModal = function(){
    modal.animate([
        {opacity: 1},
        {opacity: 0}
    ],
    {
        duration: 400
    });    
    setTimeout(function(){
        modal.classList.remove("active");
    },300);
}

let diminuirImagem = function(){
    modalImg.animate([
    {transform: 'scale(1)'},
    {transform: 'scale(0.5)'}
    ],
    {
        duration: 400
    });
}