const dots = document.querySelectorAll('.dot');

dots.forEach((dot)=>{
    dot.addEventListener('click', function(){
        this.classList.add('dot--active');
    });
});


document.querySelector('.burger').addEventListener('click', function(el){
    document.querySelector('.nav__items').classList.toggle('nav--active');
});