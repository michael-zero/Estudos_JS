////
const log= console.log;



let pai = document.querySelector('.pai');




pai.addEventListener('click',(e)=>{

    log(e.target);
})














/*
const box = document.querySelector('#box');



///cria o evento
let meuEvento = new CustomEvent('toque',{
    detail:{
        cor:'lime'
    },
    bubbles:true,
    cancelable:true
});

box.addEventListener('click',()=>{
    //manda o elemento emitir nosso evento
    box.dispatchEvent(meuEvento);
})


///ouve o evento e
box.addEventListener('toque',function(e){
    //log(e);
     log(this);
    log(e.detail.cor);
    e.target.style.background=e.detail.cor;
})


*/