//scroll
window.addEventListener('scroll', function(event){
    let scroll = this.scrollY;
    if(scroll > 0){
        console.log('scroll');
        document.getElementById('bton').style.display = 'block';
        document.getElementById('hMain').style.backgroundColor = 'white';
        document.getElementById('logoMob').innerHTML='';
    }
    else{
        console.log('no scroll');
        document.getElementById('bton').style.display = 'none';
        document.getElementById('hMain').style.backgroundColor = 'transparent';
        document.getElementById('logoMob').innerHTML='<img src="img/logo_large.png">';
        }
    }
    );

//ventanas
let ventanas = document.getElementsByClassName("mainVentanas");
document.getElementById('mainVentanas').addEventListener('mouseover', normal);
document.getElementById('mainVentanas').addEventListener('mouseout', inclinado);
function normal(){
    document.getElementById('c1').style.transform = 'rotate(0deg)';
    document.getElementById('c2').style.transform = 'rotate(0deg)';
    document.getElementById('c3').style.transform = 'rotate(0deg)';
    document.getElementById('c4').style.transform = 'rotate(0deg)';
    document.getElementById('c5').style.transform = 'rotate(0deg)';
    document.getElementById('c4').style.left = '20px';
    document.getElementById('c5').style.left = '580px';
    document.getElementById('c5').style.top = '300px';
    document.getElementById('c1').style.zIndex = '1';
    document.getElementById('c2').style.zIndex = '1';
    document.getElementById('c2').style.left= '880px';
    document.getElementById('mainVentanas').style.opacity= '100%';
};
function inclinado(){
    document.getElementById('c1').style.transform = 'rotateY(-20deg) rotateX(20deg)';
    document.getElementById('c2').style.transform = 'rotateY(-20deg) rotateX(20deg)';
    document.getElementById('c3').style.transform = 'rotateY(-20deg) rotateX(20deg)';
    document.getElementById('c4').style.transform = 'rotateY(-20deg) rotateX(20deg)';
    document.getElementById('c5').style.transform = 'rotateY(-20deg) rotateX(20deg)';
    document.getElementById('c4').style.left = '70px';
    document.getElementById('c5').style.left = '500px';
    document.getElementById('c5').style.top = '330px';
    document.getElementById('c1').style.zIndex = '0';
    document.getElementById('c2').style.zIndex = '0';
    document.getElementById('c2').style.left= '300px';
    document.getElementById('mainVentanas').style.opacity= '75%';
};