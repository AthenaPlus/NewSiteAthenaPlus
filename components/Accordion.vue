<template>
    <div class="accordion text-gray-100 w-full">
        <div class="px-5 py-0 mx-auto overflow-x-hidden"  v-for="(item, index) in items" :key="index">
            <h2 data-aos="fade-right" class="font_Airborne text-3xl" v-if="item.expanded">
                <span class="font-light">—</span> {{ item.title1 }}
            </h2> 
            <h2 
              data-aos="fade-left" class="font_Airborne text-base ml-36" v-if="item.expanded">
                {{ item.title2 }}
            </h2>
        </div>
        <div class="accordion-item mx-5" v-for="(item, index) in items" :key="index">
            <div class="accordion-header" @click="toggleItem(index)">
                <h2 class="service-item font_Airborne text-2xl text-right">{{ item.subTitle }}</h2>
            </div>
            <div class="accordion-body animate__animated animate__backInLeft" v-if="item.expanded">
                <img :src="item.img" alt="" width="500" height="340">
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
          title1: 'Новый Подход',
          title2: 'Для лучших',
          subTitle: 'Интервью',
          desc: 'Проводим съемку интервью в профессиональной фотостудии для создания лучшего продукта. Формируем концепцию будущего проекта. Определяем сильные стороны Вашей компании.',
          img: '/img/webp/ServicePhoto1.webp',
          expanded: true
        },
        {
          title1: 'Аудит Рынка',
          title2: 'Конкурентов',
          subTitle: 'Анализ',
          desc: 'Исследуем конкурентов и их сильные стороны, проверяем рыночный потенциал, проводим опрос целевой аудитории. Строим аналитику и предоставляем картину рынка.',
          img: '/img/webp/ServicePhoto2.webp',
          expanded: false
        },
        {
          title1: 'Стратегия',
          title2: 'Продвижения',
          subTitle: 'Маркетинг',
          desc: 'Составляем стратегию для улучшения имиджа бренда и максимального коэффицента конверсии. Наш целевой порог - не менее 20%.',
          img: '/img/webp/ServicePhoto3.webp',
          expanded: false
        },
        {
          title1: 'Креативная',
          title2: 'Практичность',
          subTitle: 'UX/UI',
          desc: 'Pixel-Perfect-подход от дизайнеров из лучших школ. Повышаем рентабельность проектов при помощи премиального UX/UI, интерактивности и геймификации.',
          img: '/img/webp/ServicePhoto4.webp',
          expanded: false
        },
        {
          title1: 'Тестовый полет',
          title2: 'Продукта',
          subTitle: 'MVP',
          desc: ' MVP-стадия для проверки гипотез на целевой аудитории. Разрабатываем продающий подход. Внедряем его в конечную версию проекта перед запуском.',
          img: '/img/webp/ServicePhoto6.webp',
          expanded: false
        },
        {
          title1: 'Новый Уровень',
          title2: 'Проекта',
          subTitle: 'Разработка',
          desc: 'От вёрстки, до посадки на передовые языки программирования и фреймворки. Доводим проект до технического совершенства.',
          img: '/img/webp/ServicePhoto5.webp',
          expanded: false
        },
        {
          title1: 'Каждый проект',
          title2: 'как арт-объект',          
          subTitle: 'Запуск',
          desc: 'Запускаем лучший продукт в нише, имеющий уникальную ценность. Доведя каждый элемент до совершенства, задаем стандарты рынка.',
          img: '/img/webp/ServicePhoto7.webp',
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