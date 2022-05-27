 //Elegir
 let cbuSelected = window.document.getElementById('CBU');
 CBU.addEventListener('change', cbuChange);

 let walletSelected = window.document.getElementById('Wallet');
 Wallet.addEventListener('change', walletChange);

 let form = document.forms['form1'];

 function cbuChange(){
     document.getElementById('title').innerHTML = 'Comprobar si dos CBU/CVU son iguales';
     let formChange = form['wal1'].type = 'number';
     let formChange2 = form['wal2'].type = 'number';
     document.getElementsById('camp1').innerHTML = 'CBU/CVU:';
 }
 function walletChange(){
     document.getElementById('title').innerHTML = 'Comprobar si dos Crypto Wallet son iguales';
     let formChange = form['wal1'].type = 'text';
     let formChange2 = form['wal2'].type = 'text';
     document.getElementsById('camp1').innerHTML = 'Wallet:';
 }


 //COMPROBAR IGUALDAD
 function mostrarValores(){
     let formWallet1 = form['wal1'];
     wallet1 = formWallet1.value;

     let formWallet2 = form['wal2'];
     wallet2 = formWallet2.value;
     if(wallet1 === wallet2){
     document.getElementById('pp').innerHTML = 'Son idénticas';
     }else{
     document.getElementById('pp').innerHTML = 'Son diferentes';
     }
 }

 //Eventos
 document.getElementById('button1').addEventListener('mouseover', encima);
 function encima(evento){
 let componente = evento.target;
 componente.style.background = '#00aced';
 componente.style.color = 'white';
 }

 document.getElementById('button1').addEventListener('mouseout', fuera);
 function fuera(evento){
 let componente = evento.target;
 componente.style.background = '#f2f2f2';
 componente.style.color = 'black';
 }

 //Modo Oscuro
 let botonOscuro = window.document.getElementById('btnOscuro');
 botonOscuro.addEventListener('change', modoOscuro);

 let botonClaro = window.document.getElementById('btnClaro');
 botonClaro.addEventListener('change', modoClaro);

 function modoOscuro() {
     window.document.body.style.backgroundColor = "#202124";
     window.document.body.style.color = "white";
 }

 function modoClaro() {
     window.document.body.style.backgroundColor = "#fafafa";
     window.document.body.style.color = "black";
 }