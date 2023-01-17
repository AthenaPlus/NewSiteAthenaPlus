<template>
    <section>
        <div class="container px-5 py-24 mx-auto text-white">
            <swiper :slides-per-view="4" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="employee in employees" :key="employee.index">{{ employee.title }}</swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';


  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
  data: function () {
    return {
      employees: [
        {
          title: 'Slaide'
        },
        {
          title: 'Slaide'
        },
        {
          title: 'Slaide'
        },
        {
          title: 'Slaide'
        },
        {
          title: 'Slaide'
        },
        {
          title: 'Slaide'
        },
        {
          title: 'Slaide'
        },
        {
          title: 'Slaide'
        },
        {
          title: 'Slaide'
        }
      ]
    }
  },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>