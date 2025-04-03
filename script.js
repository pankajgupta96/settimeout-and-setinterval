var h3 = document.querySelector('h3');
var btn = document.querySelector('button');
var growth = document.querySelector('#growth');

var grow = 0;


btn.addEventListener('click',function(){
    var int = setInterval(function()  {

        grow++;
        h3.innerHTML = grow+'%';
        growth.style.backgroundColor = 'green';
        growth.style.width = grow + '%';

        
    }, 50);


    setTimeout(function() { 
        clearInterval(int);
        btn.innerHTML = 'downloaded';
        btn.style.opacity = 0.5;
        btn.disabled = true;

        
    }, 5000);
})