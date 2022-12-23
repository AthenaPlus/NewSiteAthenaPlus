/**
 * Скрипт для скролла блока id="navbar"
 * Плавное анимировоное появление после > 400 px скрола страницы в низ
 */

 window.addEventListener('scroll', e => {
    // 	Переменные блока меню id="navbar и динамический класс navbar__scrolled"
    let navbar = document.getElementById('navbar').classList
    let active__class = 'navbar__scrolled'


    // 	Скрипт для скролла блока id="navbar"
    if (scrollY > 300) navbar.add(active__class)
    else navbar.remove(active__class)
})

