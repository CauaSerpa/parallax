let stars = document.getElementById('stars');
let cloud_1 = document.getElementById('cloud_1');
let cloud_2 = document.getElementById('cloud_2');
let cloud_3 = document.getElementById('cloud_3');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let ballon_behind = document.getElementById('ballon_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let ballon_front = document.getElementById('ballon_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * .25 + 'px';
    cloud_1.style.top = value * .5 + 'px';
    cloud_2.style.top = value * .5 + 'px';
    cloud_3.style.top = value * .5 + 'px';
    cloud_1.style.marginLeft = value * .5 + 'px';
    cloud_2.style.marginLeft = value * .5 + 'px';
    cloud_3.style.marginLeft = value * .5 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * .5 + 'px';
    ballon_behind.style.top = value * .4 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    ballon_front.style.top = value * -.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.bottom = value * .5 + 'px';
})
