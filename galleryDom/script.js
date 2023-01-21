const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
container.addEventListener('click', function(e) {
    if(e.target.className=='thumb') {

        jumbo.src = e.target.src;
        jumbo.classList.add('fadee');
        setTimeout(function(){
            jumbo.classList.remove('fadee');
        }, 200);

        thumbs.forEach(function(el) {
            if(el.classList.contains('active')) {
                el.classList.remove('active');

                // el.className = 'thumb';
            }
        })
        e.target.classList.add('active');
    }
})