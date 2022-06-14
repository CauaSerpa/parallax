//Mobile menu
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if (toggle && nav){
		toggle.addEventListener('click', ()=>{
            var close = document.getElementById('nav-toggle');
	        close.classList.toggle('close');

            

			nav.classList.toggle('show')
		})
	}
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.link')

function linkAction(){
	// Active link
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

    var close = document.getElementById('nav-toggle');
    close.classList.remove('close');

	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//Add background
const headerNav = document.querySelector(".l-header");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		headerNav.classList.add("background");
	} else {
		headerNav.classList.remove("background");
	}
})

//Parallax Efect
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let ballon_front = document.getElementById('ballon_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * .5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    ballon_front.style.top = value * -.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.bottom = value * .5 + 'px';
})