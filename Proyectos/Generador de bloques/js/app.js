//Random color
function randomColor(){
    let color = '#';
    let randomHex = '0123456789ABCDEF';
    for(i = 0 ; i < 6 ; i++){
        color += randomHex[Math.floor(Math.random()*16)]
    }
    return color;
}

//Generadores de bloques
document.getElementById('bton').addEventListener('click', generar);

let a = 1;
function generar(){
    id = 'art'+a;
    bloques = `<article class="art" id='${id}'></article>`;
    console.log(a);
    a = 1 + a;

    if(a > 30){
        alert('Limite alcanzado');
        document.getElementById('sect').innerHTML = ' ';
        a=0;
    }else{
        document.getElementById('sect').innerHTML += bloques;
        document.getElementById(id).style.backgroundColor = randomColor();
    }
}

//boton
document.getElementById('bton').addEventListener('mousedown', cambiarColor);
function cambiarColor(){document.getElementById('bton').style.backgroundColor = 'rgb(1, 49, 51)'}

document.getElementById('bton').addEventListener('mouseup', devolverColor);
function devolverColor(){document.getElementById('bton').style.backgroundColor = 'rgb(0, 79, 82)'}