<template>
    <div class="accordion text-gray-100 mx-5">
        <div class="w-full mb-5 overflow-hidden">
            <h2 class="font_Airborne text-3xl anime__left1">
                <span class="font-light">—</span> Каждый проект
            </h2> 
            <h2
                class="font_Airborne text-base ml-36 anime__right1">
                как арт-объект
            </h2>
        </div>
        <div class="accordion-item mx-5" v-for="(item, index) in items" :key="index">
            <div class="accordion-header" @click="toggleItem(index)">
                <h2 class="service-item font_Airborne text-2xl text-right">{{ item.subTitle }}</h2>
            </div>
            <div class="accordion-body animate__animated animate__backInLeft" v-if="item.expanded">
                <img :src="item.img" alt="">
                <p class="text-base mt-5">{{ item.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
  data() {
    return {
        items: [
        {
          title1: 'Каждый проект',
          title2: 'как арт-объект',
          subTitle: 'Интервью',
          desc: 'Проводим съемку интервью в профессиональной фотостудии для создания лучшего продукта. Формируем концепцию будущего проекта. Определяем сильные стороны Вашей компании.',
          img: '/img/ServicePhoto1.png',
          expanded: false
        },
        {
          title1: 'Каждый проект',
          title2: 'как арт-объект',
          subTitle: 'Анализ',
          desc: 'Исследуем конкурентов и их сильные стороны, проверяем рыночный потенциал, проводим опрос целевой аудитории. Строим аналитику и предоставляем картину рынка.',
          img: '/img/ServicePhoto2.png',
          expanded: false
        },
        {
          title1: 'Каждый проект',
          title2: 'как арт-объект',
          subTitle: 'Маркетинг',
          desc: 'Составляем стратегию для улучшения имиджа бренда и максимального коэффицента конверсии. Наш целевой порог - не менее 10%.',
          img: '/img/ServicePhoto3.png',
          expanded: false
        },
        {
          title1: 'Каждый проект',
          title2: 'как арт-объект',
          subTitle: 'UX/UI',
          desc: 'Pixel-Perfect-подход от дизайнеров из лучших школ. Повышаем рентабельность проектов при помощи премиального UX/UI, интерактивности и геймификации.',
          img: '/img/ServicePhoto4.png',
          expanded: false
        },
        {
          title1: 'Каждый проект',
          title2: 'как арт-объект',
          subTitle: 'MVP',
          desc: ' MVP-стадия для проверки гипотез на целевой аудитории. Разрабатываем продающий подход. Внедряем его в конечную версию проекта перед запуском.',
          img: '/img/ServicePhoto6.png',
          expanded: false
        },
        {
          title1: 'Каждый проект',
          title2: 'как арт-объект',
          subTitle: 'Разработка',
          desc: 'От вёрстки, до посадки на передовые языки программирования и фреймворки. Доводим проект до технического совершенства.',
          img: '/img/ServicePhoto5.png',
          expanded: false
        },
        {
          title1: 'Каждый проект',
          title2: 'как арт-объект',          
          subTitle: 'Запуск',
          desc: 'Запускаем лучший продукт в нише, имеющий уникальную ценность. Доведя каждый элемент до совершенства, задаем стандарты рынка.',
          img: '/img/ServicePhoto7.png',
          expanded: false
        }
      ]
    };
  },
  methods: {
    toggleItem(index) {
      // Close any currently open items
      for (let i = 0; i < this.items.length; i++) {
        if (i !== index && this.items[i].expanded) {
          this.items[i].expanded = false;
        }
      }

      // Toggle the clicked item
      this.items[index].expanded = !this.items[index].expanded;
    }
  }
};
</script>


<style scoped>

.service-item:hover {
    background: linear-gradient(180deg, #FF2BFF 0%, #FE9402 100%);
    color: transparent;
    background-clip: text;
    transition: all 0.3s;
}
.accordion-header {
  padding: 10px;
  cursor: pointer;
}

.accordion-body {
  padding: 10px;
}
</style>