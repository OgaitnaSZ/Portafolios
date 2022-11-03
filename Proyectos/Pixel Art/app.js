function fMain(){
    //Loading
    let ii = 0;
    setInterval(segundos, 200);
    function segundos(){
        ii++;
        porcentaje = ii*10;
        if(porcentaje<=100){
            document.getElementById('barInt').style.width = ii*10+'%';
            document.getElementById('bar').innerHTML = ii*10+'%';
        }
        if(porcentaje == 100){
            document.getElementById('loading').style.display='none';
            document.getElementById('loading').innerHTML = ' ';
        }
    }  

//Seleccionar tamaño
    document.getElementById('t10').addEventListener('change', t10);
    document.getElementById('t20').addEventListener('change', t20);

    function t10(){ //Tamaño 10x10
        document.getElementById('plantilla').style.width='400px';
        document.getElementById('plantilla').style.height='400px';
        document.getElementById('bton').style.display='block';
        document.getElementById('nombreDibujo').style.display='block';
        document.getElementById('mensaje').style.display='block';
        document.getElementById('title').style.display='none';

        //Generar pixeles
        document.getElementById('plantilla').innerHTML = ' ';
        for(i=0 ; i<100 ; i++){
            document.getElementById('plantilla').innerHTML += '<div class="pixel"></div>';
        };
        generarColor();
        tam = 10;
    }
    function t20(){ //Tamaño 20x20
        document.getElementById('plantilla').style.width='800px';
        document.getElementById('plantilla').style.height='800px';
        document.getElementById('bton').style.display='block';
        document.getElementById('nombreDibujo').style.display='block';
        document.getElementById('mensaje').style.display='block';
        document.getElementById('title').style.display='none';

        //Generar pixeles
        document.getElementById('plantilla').innerHTML = ' ';
        for(i2=0 ; i2<400 ; i2++){
            document.getElementById('plantilla').innerHTML += '<div class="pixel"></div>';
        }
        document.getElementById('mensaje').style.display = 'block';
        generarColor();
        tam = 20;
    }

//Seleccionar Color
    let color = 'black';
    let pixel = document.getElementsByClassName("pixel");
    function generarColor(){
        document.getElementById('color').addEventListener('change', function(){
            color = document.getElementById('color').value; //Seleccionar color
        });
        document.getElementById('borrador').addEventListener('click', function(){
            color = 'white';
        });
        for (i=0; i<pixel.length; i++) { //Colorear
            pixel[i].addEventListener("click",function(){ 
                this.style.backgroundColor = color;
                document.getElementById('mensaje').style.display = 'none'; 
            });  
        }
    }

//Activar o Desactivar Cuadricula
document.getElementById('qsi').addEventListener('change', qsi);
document.getElementById('qno').addEventListener('change', qno);

function qsi(){
    for (j=0; j<pixel.length; j++) {
            pixel[j].style.boxShadow = '0px 0px 1px rgba(0, 0, 0, 0.3)';
        };
    }
function qno(){
    for (k=0; k<pixel.length; k++) {
            pixel[k].style.boxShadow = 'none';
        };
    }

//Tamaño de los pixeles
document.getElementById('rango').addEventListener('change', cambiarTamaño);
function cambiarTamaño(){
    let tamPix = document.getElementById('rango').value;
    for (l=0; l<pixel.length; l++) {
        pixel[l].style.width=`${tamPix}px`;
        pixel[l].style.height=`${tamPix}px`;

        if(tam == 10){
            document.getElementById('plantilla').style.width=`${tamPix*10}px`;
            document.getElementById('plantilla').style.height=`${tamPix*10}px`;
        }
        if(tam == 20){
            document.getElementById('plantilla').style.width=`${tamPix*20}px`;
            document.getElementById('plantilla').style.height=`${tamPix*20}px`;
        }

    };
}
//Zoom
document.getElementById('zoom').addEventListener('change', zoom);
function zoom(){
    let zoom = document.getElementById('zoom').value;
    document.getElementById('plantilla').style.transform = `scale(${zoom})`;
    //document.getElementById('plantilla').style.margin= `-${zoom*50}%`;
}
}

//Descargar
const btn = document.querySelector('#bton')
btn.addEventListener('click', capture)
function capture() {
    nombreDibujo = document.getElementById('nombreDibujo').value;
    if(nombreDibujo == ''){
        nombreDibujo = 'dibujo-sin-nombre';
    }
    const captureElement = document.querySelector('#plantilla')
    html2canvas(captureElement)
        .then(canvas => {
            canvas.style.display = 'none'
            document.body.appendChild(canvas)
            return canvas
        })
        .then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', `${nombreDibujo}.png`)
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })
}