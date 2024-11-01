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


console.log(`\u2728 Code writer of the high-quality code: 🧔🏼‍♂️ %c PoliWeb %c LEV TOLSTOY`,
    "color: black; border-radius: 6px 0 0 6px; padding: 2px 2px 1px 10px; background: #00ff77",
    "color: #fff; border-radius: 0 6px 6px 0; padding: 2px 10px 1px 2px; background: #ff00b2",
    `\u2728 `
    )
