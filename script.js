let dino = document.getElementById('dinosaur');
let block = document.getElementById('block');
let score = document.getElementById('pa')
let block2 = document.getElementById('block2')



function jump(){
    if(dino.classList != "animate"){dino.classList.add('animate'); }
    
    setTimeout(function (){dino.classList.remove('animate');}, 500)
}







let deadTF = setInterval(function(){let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")); 

let blockl = parseInt(window.getComputedStyle(block).getPropertyValue("left")); if(blockl<20 && blockl>0 && dinoTop>=85 || block2l<20 && block>0 && dinoTop>=85){  dino.style.backgroundImage = "url(muelto.png)"; alert('u lose'); block.style.animation = "none"; }}, 10);
