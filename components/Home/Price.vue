<template>
  <section class="text-white relative z-5">
    <div class="sm:container px-5 pb-20 mx-auto overflow-x-hidden">
      <h2 data-aos="fade-right" class="font_Airborne 2xl:text-7xl xl:text-6xl md:text-4xl text-3xl mb-5 xl:mb-8">Прайс</h2>
      <div id="price-main" class="hidden md:flex relative pt-10 md:pb-72 lg:pb-60 2xl:pb-56">
        <div id="price-not-pin" class="md:w-1/2 w-full">
          <div v-for="position in positions" :key="position.id" class="border py-5 px-5 xl:py-8 xl:px-10">
            <div class="sm:flex justify-between items-center">
              <h3 class="font_Airborne text-center sm:text-left text-[20px] md:text-[16px] lg:text-[20px] xl:text-[26px]">{{ position.title }}</h3>
              <h4 class="font_Airborne text-center sm:text-left text-[20px] md:text-[16px] lg:text-[20px] xl:text-[26px]">от {{ position.price }} тг</h4>
            </div>
            <p class="text-center sm:text-left text-base xl:text-[20px] mt-5">{{ position.desc }}</p>
            <button @click="selectPosition(position.id)"
              :class="{ 'active': selectedPosition === position.id }" class="font_Airborne xl:text-lg bg-white w-full py-4 mt-5 text-black">
              <span>Этапы работы</span>
            </button>
          </div>
        </div>
        <div id="price-pin" class="md:w-1/2 2xl:w-[45%]">
          <component :is="selectedStageComponent" class="StageComponent" />
        </div>
      </div>
      <div class="md:hidden">
        <PriceMobile />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import FirstStage from '../PriceStages/FirstStage.vue';
import SecondStage from '../PriceStages/SecondStage.vue';
import ThirdStage from '../PriceStages/ThirdStage.vue';
import FourthStage from '../PriceStages/FourthStage.vue';
import FifthStage from '../PriceStages/FifthStage.vue';
import SixthStage from '../PriceStages/SixthStage.vue';
import PriceMobile from '../PriceMobile.vue';


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
    price: '1 200 000',
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

onMounted(() => {
  if(window.innerWidth >= 768) {
    selectedPosition.value = 1;
  }
  gsap.registerPlugin(ScrollTrigger);

  const PriceMain = document.getElementById("price-main");
  const PricePin = document.getElementById("price-pin");
  const PriceNotPin = document.getElementById("price-not-pin");

  let endValue;

if (window.innerWidth >= 768 && window.innerWidth < 1024) {
  endValue = "top+=838";
} else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
  endValue = "top+=778";
} else if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
  endValue = "top+=987";
} else if (window.innerWidth >= 1536) {
  endValue = "top+=811";
}

gsap.to(PriceNotPin, {
  ease: "none",
  scrollTrigger: {
    trigger: PriceMain,
    pin: PricePin,
    start: "top",
    end: endValue,
    invalidateOnRefresh: true,
    pinSpacing: false,
  },
});
})
const selectPosition = (positionId) => {
  if (selectedPosition.value === positionId) {
    selectedPosition.value = null;
  } else {
    selectedPosition.value = positionId;
  }
};

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