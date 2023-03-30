/**
 * Скрипт для скролла блока id="navbar"
 * Плавное анимировоное появление после > 400 px скрола страницы в низ
 */

 window.addEventListener('scroll', e => {
    // 	Переменные блока меню id="navbar и динамический класс navbar__scrolled"
    let navbar = document.getElementById('navbar').classList
    let active__class = 'navbar__scrolled'


    // 	Скрипт для скролла блока id="navbar"
    if (scrollY > 100) navbar.add(active__class)
    else navbar.remove(active__class)
})




// Код для эффека фото

const container = document.querySelector('.photo-effect');
const images = container.querySelector('.photo-effect__img');

function onMouseMove(event) {
   const target = event.target;
   if (target.tagName !== 'IMG') return;
 
   const rect = container.getBoundingClientRect();
   const centerX = rect.left + rect.width / 2;
   const centerY = rect.top + rect.height / 2;
   const mouseX = event.clientX;
   const mouseY = event.clientY;
   const angleX = (mouseY - centerY) * 0.01;
   const angleY = (mouseX - centerX) * -0.01;
 
   target.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}

container.addEventListener('mousemove', onMouseMove);

for (let i = 0; i < images.length; i++) {
   const img = images[i];
   img.style.transitionDelay = `${i * 0.1}s`;
 }
