<template>
  <section>
    <div class="border p-3 sm:py-5 sm:px-5 xl:py-8 xl:px-10">
      <h3 class="font_Airborne text-center sm:text-left text-[20px] xl:text-[26px]">Этапы работы</h3>
      <div class="stages-accordion">
        <div v-for="(stage, index) in stages" :key="index" class="stages-accordion-group border-b border-[#878787B2]" :class="{ 'expanded': stage.isExpanded }">
          <div class="stages-accordion-menu" @click="toggleMenu">
            <div class="stage-title grid grid-cols-6 sm:grid-cols-5 lg:grid-cols-4 items-center w-full px-4 py-5 2xl:py-7 text-left hover:bg-white/10 transition duration-700 ease-in-out">
              <h3 class="text-xs min-[350px]:text-sm min-[400px]:text-lg md:text-sm lg:text-xl xl:text-2xl col-span-2">{{ stage.title }}</h3>
              <h4 class="text-xs min-[350px]:text-sm min-[400px]:text-lg md:text-sm lg:text-lg xl:text-2xl col-span-3 sm:col-span-2 lg:col-span-1 justify-self-center">от {{ stage.price }} тг</h4>
              <img
                class="col-span-1 justify-self-end w-6 h-6 sm:w-auto sm:h-auto"
                src="/img/plus.svg"
                alt=""
                :style="{ transform: `rotate(${stage.rotation}deg)` }"
              >
            </div>
          </div>
          <div class="stages-accordion-content px-4">
            <p class="text-sm sm:text-base pt-5">{{ stage.desc }}</p>
            <button
              class="font_Airborne bg-white mb-5 py-2.5 w-1/2 lg:w-1/3 text-sm sm:text-base text-black float-right mt-5" 
              @click="toggleStage(index)">
              {{ addedStages[stage.title] ? 'Убрать' : 'Добавить' }}
            </button>
          </div>
        </div>
        <div class="grid grid-cols-2 px-4 py-5 border-b border-[#878787B2]">
          <h3 class="font_Airborne text-sm min-[400px]:text-base sm:text-xl xl:text-2xl">Итого</h3>
          <h4 class="font_Airborne text-sm min-[400px]:text-base sm:text-xl xl:text-2xl pl-5">от {{ total }} тг</h4>
        </div>
        <div class="text-[#878787B2] px-4 pt-5 text-xs sm:text-base">
          * Конечная стоимость продукта зависит от объема работы и сложности реализации
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap';
import { ref, onMounted } from 'vue';
import { getCurrentInstance } from 'vue';

const total = ref(0);
const addedStages = ref({});

const stages = ref([
  {
    title: 'Интервью',
    desc: 'Приятное дружеское интервью, где мы максимально вникнем в вашу задачу. Благодаря этому мы экономим время наших клиентов и уже на этапе прототипа более чем в 87% случаев предоставляем проект, который практически не требует доработки.',
    price: 0,
    rotation: 0 
  },
  {
    title: 'Исследование',
    desc: 'Анализируем рынок, маркетинговые и продажные аспекты, конкурентов, удобство использования сайта, дизайн и потребности ваших клиентов. Это позволяет нам предложить наилучшие решения, которые полностью отвечают потребностям и требованиям наших клиентов.',
    price: 25000,
    rotation: 0 
  },
  {
    title: 'Логотип',
    desc: 'Предоставляем несколько концепций логотипов, подбираем шрифтовые пары для названия и описания, а также разрабатываем цветовую палитру для вашего бренда.',
    price: 50000,
    rotation: 0 
  },
  {
    title: 'Фирменный Стиль',
    desc: 'После утверждения логотипа, шрифтов и цветов, мы разрабатываем фирменный стиль, который включает графический паттерн и дизайн носителей, чтобы выразить вашу новую стилистику на различных материалах и поверхностях.',
    price: 80000,
    rotation: 0 
  },
  {
    title: 'Брендбук',
    desc: 'Документ, который после утверждения логотипа, шрифтов и цветов, устанавливает стандарты и правила использования этих элементов. Он также определяет графические рекомендации и дизайн-руководства для различных носителей и материалов',
    price: 145000,
    rotation: 0 
  }
]);

onMounted(() => {
  const groups = gsap.utils.toArray(".stages-accordion-group");
  const menus = gsap.utils.toArray(".stages-accordion-menu");
  const menuToggles = groups.map(createAnimation);

  menus.forEach(menu => {
    menu.addEventListener("click", toggleMenu);
  });

  function toggleMenu(event) {
  const clickedMenu = event.currentTarget;
  menuToggles.forEach((toggleFn, index) => {
    if (clickedMenu === menus[index]) {
      toggleFn();
    } else {
      toggleFn(true); // Закрываем другие элементы аккордеона
    }
  });

  // Обновляем состояние isExpanded и анимируем вращение
  stages.value.forEach((stage, index) => {
    if (clickedMenu === menus[index]) {
      stage.isExpanded = !stage.isExpanded;
      gsap.to(stage, { rotation: stage.isExpanded ? 45 : 0, duration: 0.5, ease: "power1.inOut" }); // Анимация вращения
    } else {
      stage.isExpanded = false;
      gsap.to(stage, { rotation: 0, duration: 0.5, ease: "power1.inOut" }); // Анимация вращения
    }
  });
}

function createAnimation(element) {
  const menu = element.querySelector(".stages-accordion-menu");
  const box  = element.querySelector(".stages-accordion-content");

    gsap.set(box, { height: "auto"});
  
  const animation = gsap.from(box, { 
    height: 0, 
    duration: 0.5, 
    ease: "power1.inOut" 
  }).reverse();
  
  return function(forceClose = false) {
    if (!forceClose) {
      animation.reversed(!animation.reversed());
    } else {
      animation.reverse();
    }
  }
}
});
function toggleStage(index) {
  const stage = stages.value[index];
  const button = document.querySelector(`.stages-accordion-group:nth-child(${index + 1}) button`); // Ищем кнопку для текущего этапа

  if (addedStages[stage.title]) {
    total.value -= stage.price;
    addedStages[stage.title] = false;
    button.textContent = 'Добавить'; // Изменяем текст на "Добавить"
  } else {
    total.value += stage.price;
    addedStages[stage.title] = true;
    button.textContent = 'Убрать'; // Изменяем текст на "Убрать"
  }
}
</script>

<style scoped>
.border {
  border: 1px solid #878787B2;
}
.stages-accordion-menu {
  cursor: pointer;
}
.stages-accordion-content {
  height: 0;
  overflow: hidden;
}
.stages-accordion-content.expanded {
  height: auto;
  overflow: visible;
}
button:hover {
  background: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
}
</style>
