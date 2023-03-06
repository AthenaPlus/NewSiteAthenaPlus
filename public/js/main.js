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




// Yandex.Metrika counter

   // (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   // m[i].l=1*new Date();
   // for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   // k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   // (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   // ym(92703087, "init", {
   //      clickmap:true,
   //      trackLinks:true,
   //      accurateTrackBounce:true,
   //      webvisor:true
   // });



