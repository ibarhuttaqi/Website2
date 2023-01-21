function getPilihanKomputer(){
    let aKom = Math.floor(Math.random()*3+1);
    // console.log(aKom);
    if(aKom==1) return 'Semut';
    if(aKom==2) return 'Gajah';
    return 'Orang';
    
}

function getHasil(pKom, pPlayer){
    if(pPlayer==pKom) return 'SERI !!!'; 
    if(pPlayer=='Gajah') return (pKom=='Orang')?'MENANG !!!':'KALAH !!!';
    if(pPlayer=='Orang') return (pKom=='Semut')?'MENANG !!!':'KALAH !!!';
    if(pPlayer=='Semut') return (pKom=='Gajah')?'MENANG !!!':'KALAH !!!';
}

function putar(){
    const imgKom = document.querySelector('.img-komputer');
    const img = ['Gajah', 'Orang', 'Semut'];
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuAwal > 1000){
            clearInterval;
            return;
        }
        imgKom.setAttribute('src', 'img/' + img[i++] + '.png');
        if(i==img.length){
            i = 0;     
        }
    }, 100);
    
    // 100 = 0.1 detik
}


let scoreK = 0;
let scoreP = 0; 
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function(){
        // console.log(pil);
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);
        // console.log(pilihanKomputer);
        // console.log(pilihanPlayer);
        // console.log(hasil);

        putar();

        setTimeout(function() {
            const imgKom = document.querySelector('.img-komputer');
            imgKom.setAttribute('src','img/' + pilihanKomputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;

                 
            const papanScoreKom = document.querySelector('.score.kom h3');
            const papanScoreP = document.querySelector('.score.player h3');
            
            if(hasil=='KALAH !!!'){
                papanScoreKom.innerHTML = ++scoreK;
                // papanScoreKom.style.transition = 'all ease-in-out 1s';
            }else if(hasil=='MENANG !!!'){
                papanScoreP.innerHTML = ++scoreP;
            }

        }, 1000);
        

    });
});









// const pGajah = document.querySelector('.Gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     // console.log(pilihanKomputer);
//     // console.log(pilihanPlayer);
//     // console.log(hasil);

//     const imgKom = document.querySelector('.img-komputer');
//     imgKom.setAttribute('src','img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

// })
// const pOrang = document.querySelector('.Orang');
// pOrang.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     // console.log(pilihanKomputer);
//     // console.log(pilihanPlayer);
//     // console.log(hasil);

//     const imgKom = document.querySelector('.img-komputer');
//     imgKom.setAttribute('src','img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

// })
// const pSemut = document.querySelector('.Semut');
// pSemut.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     // console.log(pilihanKomputer);
//     // console.log(pilihanPlayer);
//     // console.log(hasil);

//     const imgKom = document.querySelector('.img-komputer');
//     imgKom.setAttribute('src','img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

// })



