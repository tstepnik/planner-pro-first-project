var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', showMobileNav)
backdrop.addEventListener('click', quitMobileMenu);

function showMobileNav() {
mobileNav.style.display='block';
backdrop.style.display='block';
setTimeout(addOpenClass,10);
}
function quitMobileMenu() {
    setTimeout(removeMobileNav,10);
    closeModal();
}


function removeMobileNav() {
    mobileNav.classList.remove('open');
}

function addOpenClass() {
mobileNav.classList.add('open')
backdrop.classList.add('open')
}

function noneBackdrop() {
backdrop.style.display='none';
}

function closeModal() {
backdrop.classList.remove('open');
setTimeout(noneBackdrop,10)
}