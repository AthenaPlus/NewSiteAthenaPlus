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
  import { Swiper, SwiperSlide } from 'swiper/vue';
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
        }
      ]
    }
  },
    setup() {
      const onSwiper = (swiper) => {

      };
      const onSlideChange = () => {

      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>