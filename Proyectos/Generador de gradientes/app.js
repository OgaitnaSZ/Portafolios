function fmain(){
    ancho = 600;
    alto = 200;
    color1 = '#d9a985';
    color2 = '#85b5d9';
    orientacion = 30;
    z1 = 0;
    z2 = 100;
    li();
}
    //Tipo de Degradado
    let tipo;
    document.getElementById('degLi').addEventListener('change', li);
    document.getElementById('degRa').addEventListener('change', ra);
    function li(){
        document.getElementById('imagen').style.background = `linear-gradient(${orientacion}deg,${color1} ${z1}%,${color2} ${z2}%)`;
        document.getElementById('Ori').style.display = 'flex';
        tipo = 'li';
    }
    function ra(){
        document.getElementById('imagen').style.background = `radial-gradient(circle,${color1} ${z1}%,${color2} ${z2}%)`;
        document.getElementById('Ori').style.display = 'none';
        tipo = 'ra';
    };
    //Seleccionar tamaño
    document.getElementById('ancho').addEventListener('change', function(){
        ancho = document.getElementById('ancho').value;
        document.getElementById('imagen').style.width = `${ancho}px`;
    });
    document.getElementById('alto').addEventListener('change', function(){
        alto = document.getElementById('alto').value;
        document.getElementById('imagen').style.height = `${alto}px`;
    });
    //Seleccionar colores
    document.getElementById('color1').addEventListener('change', function(){
        color1 = document.getElementById('color1').value;
        if(tipo == 'li'){li();}
        if(tipo == 'ra'){ra();}
    });
    document.getElementById('color2').addEventListener('change', function(){
        color2 = document.getElementById('color2').value; 
        if(tipo == 'li'){li();}
        if(tipo == 'ra'){ra();}
    });
    //Seleccionar orientacion
    document.getElementById('orientacion').addEventListener('change', function(){
        orientacion = document.getElementById('orientacion').value;
        if(tipo == 'li'){li();}
        if(tipo == 'ra'){ra();}
    });
    //Nivel de Degradado
    document.getElementById('zoom').addEventListener('change', function(){
        zoom = document.getElementById('zoom').value;
        z1 = 0 + zoom;
        z2 = 100 - zoom;
        if(tipo == 'li'){li();}
        if(tipo == 'ra'){ra();}
    });
//Descargar
const btn = document.querySelector('#bton')
btn.addEventListener('click', capture)
function capture() {
    const captureElement = document.querySelector('#imagen')
    html2canvas(captureElement)
        .then(canvas => {
            canvas.style.display = 'none'
            document.body.appendChild(canvas)
            return canvas
        })
        .then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', `background.png`)
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })
}