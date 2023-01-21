const body = document.querySelector('body');
const tombol = document.querySelector('#tUbahWarna');
tombol.addEventListener('click', function(){
    // body.style.backgroundColor = 'lightBlue';
    // body.setAttribute('class','ijo-muda');

    body.classList.toggle('ijo-muda');
})



const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

tombol.after(tAcakWarna);
tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random()*255+1);
    const g = Math.round(Math.random()*255+1);
    const b = Math.round(Math.random()*255+1);
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input',function(){
    // console.log(sMerah.value);

    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    // body.style.backgroundColor = 'rgb('+ r + ', 100, 100)';
    body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';

});
sHijau.addEventListener('input',function(){
    // console.log(sMerah.value);

    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    // body.style.backgroundColor = 'rgb('+ r + ', 100, 100)';
    body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';

});
sBiru.addEventListener('input',function(){
    // console.log(sMerah.value);

    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    // body.style.backgroundColor = 'rgb('+ r + ', 100, 100)';
    body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';

});

// perbedaan antara change dan input bisa dicoba sendiri ya ges



document.body.addEventListener('mousemove',function(e){
    // posisi mouse
    // console.log(e.clientX);
    // console.log(e.clientY);

    // Ukuran Browser
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);

    const posX = Math.round((e.clientX/window.innerWidth)*255);
    const posY = Math.round((e.clientY/window.innerHeight)*255);
    // console.log(posX);

    document.body.style.backgroundColor = 'rgb(' + posX + ',' + posY + ',100)';
})