
// Nav Bar
const navBtn = document.getElementById('navBtn');
const burgerBar = document.getElementById('burger');
const navList = document.querySelector('nav');

document.onclick = function(e) {
    if (e.target.id !== 'nav' && e.target.id !== 'burger' && e.target.id !== 'list') {
        burgerBar.classList.remove('fa-x');
        navList.classList.remove('active');
    }
}

navBtn.onclick = function() {
    burgerBar.classList.toggle('fa-x');
    navList.classList.toggle('active');
}