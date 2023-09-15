<template>
  <div v-for="position in positions" :key="position.id">
    <div class="border py-5 px-5 w-full">
      <div class="sm:flex justify-between items-center">
        <h3 class="font_Airborne text-center sm:text-left text-[20px] md:text-[16px] lg:text-[20px] xl:text-[26px]">{{ position.title }}</h3>
        <h4 class="font_Airborne text-center sm:text-left text-[20px] md:text-[16px] lg:text-[20px] xl:text-[26px]">от {{ position.price }} тг</h4>
      </div>
      <p class="text-center sm:text-left text-base xl:text-[20px] mt-5">{{ position.desc }}</p>
      <button @click="togglePosition(position)" class="font_Airborne xl:text-lg bg-white w-full py-4 mt-5 text-black" :class="{ 'font_Airborne xl:text-lg bg-white w-full py-4 mt-5 text-black active': selectedPosition === position.id }">
        <span>Этапы работы</span>
      </button>
    </div>
    <div v-if="position.open" class="content">
      <component :is="selectedStageComponent" class="StageComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import FirstStage from '../components/PriceStages/FirstStage.vue';
import SecondStage from '../components/PriceStages/SecondStage.vue';
import ThirdStage from '../components/PriceStages/ThirdStage.vue';
import FourthStage from '../components/PriceStages/FourthStage.vue';
import FifthStage from '../components/PriceStages/FifthStage.vue';
import SixthStage from '../components/PriceStages/SixthStage.vue';

const positions = [
  {
    id: 1,
    title: 'Одностраничный Сайт',
    price: '150 000',
    desc: 'Идеально подходит для компаний, которым необходимо быстро проверить гипотезу, создать страницу для получения заявок'
  },
  {
    id: 2,
    title: 'Многостраничный сайт',
    price: '250 000',
    desc: 'Для бизнесов, которым требуется более подробно рассказать о своем продукте, услугах, компании и команде, а также предоставить больше информации в различных аспектах'
  },
  {
    id: 3,
    title: 'Интернет-Магазин',
    price: '700 000',
    desc: 'Предназначен для продажи физических и цифровых товаров с онлайн-оплатой, поддержкой клиентов, управлением каталогами и организацией доставки'
  },
  {
    id: 4,
    title: 'UX/UI Приложений',
    price: '550 000',
    desc: 'Удобный и интуитивно понятный интерфейс для пользователей'
  },
  {
    id: 5,
    title: 'Лого-Брендинг',
    price: '300 000',
    desc: 'Создание уникальной корпоративной идентичности, включая логотип, цветовую схему и стиль'
  },
  {
    id: 6,
    title: 'Digital-Аудит',
    price: '300 000',
    desc: 'Позволяет выявить сильные и слабые стороны, определить возможности для улучшения присутствия в сети и оптимизации маркетинговых усилий.'
  },
];

const selectedPosition = ref(null);

const selectedStageComponent = computed(() => {
  switch (selectedPosition.value) {
    case 1:
      return FirstStage;
    case 2:
      return SecondStage;
    case 3:
      return ThirdStage;
    case 4:
      return FourthStage;
    case 5:
      return FifthStage;
    case 6:
      return SixthStage;
    default:
      return null;
  }
});

const togglePosition = (position) => {
  if (selectedPosition.value === position.id) {
    selectedPosition.value = null;
  } else {
    selectedPosition.value = position.id;
  } 

  positions.forEach((item) => {
    item.open = item.id === position.id && selectedPosition.value !== null;
  });
};
</script>

<style scoped>
* {
  overflow: hidden;
}
.border {
  border: 1px solid #878787B2;
}
button {
  position: relative;
  overflow: hidden;
  border: none;
  z-index: 10;
}
button span {
  position: relative;
}
button span::before {
  color: #fff;
}
button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

button:hover::before {
  opacity: 1;
}
button.active {
  background-image: linear-gradient(180deg, #FCB040 0%, #FF2BFF 100%);
}

button.active::before {
  opacity: 1;
  z-index: -1;
}

@media (max-width: 768px) {
  button::before {
    width: 0;
    height: 0;
  }
}
</style>