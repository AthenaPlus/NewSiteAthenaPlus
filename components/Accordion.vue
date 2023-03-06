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
                <h2 class="service-item font_Airborne text-2xl text-right">{{ item.title }}</h2>
            </div>
            <div class="accordion-body" v-if="item.expanded">
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
          title: 'Интервью',
          desc: 'Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
          img: '/img/ServicePhoto1.png',
          expanded: false
        },
        {
          title: 'Анализ',
          desc: 'Анализ тект. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
          img: '/img/ServicePhoto2.png',
          expanded: false
        },
        {
          title: 'Маркетинг',
          desc: 'Маркетинг-текст. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
          img: '/img/ServicePhoto3.png',
          expanded: false
        },
        {
          title: 'UX/UI',
          desc: 'UX/UI текст. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
          img: '/img/ServicePhoto4.png',
          expanded: false
        },
        {
          title: 'Разработка',
          desc: 'Разработка-текст.Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
          img: '/img/ServicePhoto5.png',
          expanded: false
        },
        {
          title: 'MVP',
          desc: 'MVP-текст. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
          img: '/img/ServicePhoto6.png',
          expanded: false
        },
        {
          title: 'Запуск',
          desc: 'Запуск-текст. Обговариваем детали заказа. На этом этапе устанавливаются ваши предпочтения и формируется концепция будущего пректа. КРАЙНЕ важный этап для понимания ваших предпочтений в будущем проекте.',
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
    background: linear-gradient(180deg, #FF2BFF 0%, #FE7C3C 43.23%, #FE9402 100%);
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