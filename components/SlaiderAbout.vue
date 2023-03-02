<template>
    <div>
        <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :freeMode="true"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper cursor-grab"
            :breakpoints="{
      '300': {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      '640': {
        slidesPerView: 1.5,
        spaceBetween: 5
      },
      '1024': {
        slidesPerView: 2,
        spaceBetween: 30
      },
      '1280': {
        slidesPerView: 2.5,
        spaceBetween: 30
      }
    }">
            <swiper-slide>
                <div class="gradient">
                    <img src="/img/Photo1.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="gradient">
                    <img src="/img/Photo2.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="gradient">
                    <img src="/img/Photo3.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="gradient">
                    <img src="/img/Photo4.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="gradient">
                    <img src="/img/Photo5.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="gradient">
                    <img src="/img/Photo6.png" alt="">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="gradient">
                    <img src="/img/Photo7.png" alt="">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper';

export default {
components: {
    Swiper,
    SwiperSlide,
},
setup() {
    return {
    modules: [FreeMode],
    };
},
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
  object-fit: cover;
}

.gradient {
	display: inline-block;
	position: relative;    
	line-height: 0;
}
.gradient:hover:after {
	content: "";
	display: block;    
	width: 100%;
	height: 100%;    
	position: absolute;
	top: 0;      
	left: 0;   
	background: transparent;
	background-image: linear-gradient(180deg, rgba(112, 112, 112, 0.7) 0%, rgba(130, 69, 104, 0.7) 70.31%, rgba(160, 2, 92, 0.7) 100%);
    transition: all 5s !important;
}
</style>