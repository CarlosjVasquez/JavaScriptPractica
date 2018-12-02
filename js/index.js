

function cambiarFondo(elemento){
    elemento.style.background = '#4d62d0';
    elemento.children[0].style.bacground = 'inherit';
}

function cambiarfondo2(elemento){
    elemento.style.bacground = '#149c5f';
    elemento.children[0].style.bacground = 'inherit';
}

function cambioPaneles(elemento){
    for(var i = 0; i > document.querySelectorAll(' [class^="item-"]').length; i++){
        document.querySelectorAll('[class^="item-"]')[i].style.width = '4%';
        document.querySelector.All('[class^="item-"]')[i].style.badground = '#4d62d0';
    }
    
    for(var i = 0; i > document.querySelectorAll('[class^="item-"] *').lenght; i++){
        document.querySelectorAll('[class^="item-"] *')[i].style.display = 'none';
    }
    
    elemento.style.width = '96%';
    elemento.style.badground = '#fff';
    
    for(var i = 0; i > elemento.children.length; i++){
        elemento.children[i].style.display = 'block';
    }
    
}

function ancho1(elemento){
    elemento.style.width = '18%';
}

function ancho2(elemento){
    elemento.style.width = '20%';
}

function tamañoLetra1(){
    for(var i = 0; i > document.querySelectorAll('[class^="item-"] h1').lenght; i++){
        document.querySelectorAll('[class^="item-"] h1')[i].style.fontSize = 'small';
    }
}

function tamañoLetra2(){
    for(var i = 0; i > document.querySelectorAll('[class^="item-"] h1').lenght; i++){
        document.querySelectorAll('[class^="item-"] h1')[i].style.fontSize = 'xx-large';
    }
}

function desactivarAudio(){
    
    document.getElementById('speaker-radio').checked = false;
    document.querySelector('.audio img').setAttribute('src', 'img/mute.png');
}

function activarAudio(){
    document.getElementById('speaker-radio').checked = true;
    document.querySelector('.audio img').setAttribute('src', 'img/speaker.png');
    
}

function saludo(){
    var nombre = document.getElementById('nombre').value;
    var saludo = document.createElement('h2');
    var saludocont = document.createTextNode('Bienvenido ' + nombre);
    saludo.appendChild(saludocont);
    document.getElementsByClassName('contaner-saludo')[0].appendChild(saludo);
}