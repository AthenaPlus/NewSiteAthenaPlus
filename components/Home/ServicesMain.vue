<template>
    <section
        class="text-white">
        <div class="sm:container px-5 mx-auto overflow-x-hidden">
            <h2 data-aos="fade-right" class="font_Airborne 2xl:text-7xl xl:text-6xl md:text-4xl text-3xl mb-5 xl:mb-8">Услуги</h2>
            <div class="content grid lg:grid-cols-2 gap-5 md:gap-12 2xl:gap-24">
                <div v-for="item in imageArray" :key="item.id" class="move-wrapper overflow-hidden">
                    <div class="image move-me2">
                        <img class="move-me relative" :src="item.path" :alt="item.alt" width="856" height="696">
                        <h2 class="font_Airborne move-me3 absolute text-xs min-[350px]:text-sm min-[450px]:text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl text-white z-20" :style="{ top: item.top, left: item.left }">{{ item.text }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap'

const imageArray = [
  {
    id: 1,
    path: '/img/Mobile.png',
    text: "Мобильные приложения",
    top: '89%',
    left: '5%'
  },
  {
    id: 2,
    path: "/img/Sites.png",
    text: "Сайты",
    top: '86%',
    left: '5%'
  },
  {
    id: 3,
    path: "/img/Seo.png",
    text: "SEO",
    top: '86%',
    left: '5%'
  },
  {
    id: 4,
    path: "/img/Design.png",
    text: "Графический дизайн",
    top: '93%',
    left: '5%'
  },
  {
    id: 5,
    path: "/img/Advertising.png",
    text: "Реклама",
    top: '89%',
    left: '5%'
  },
  {
    id: 6,
    path: "/img/Support.png",
    text: "Поддержка",
    top: '85%',
    left: '5%'
  },
];

onMounted(() => {
  gsap.utils.toArray(".move-wrapper").forEach((element, i) => {
    let moveMe = element.querySelector(".move-me");
    let moveMe2 = element.querySelector(".move-me2");
    let moveMe3 = element.querySelector(".move-me3");
    
    gsap.set(moveMe, {
      transformPerspective: 600,
      transformOrigin: 'center center',
    });
    
    gsap.set(moveMe2, {
      transformPerspective: 600,
      transformOrigin: 'center center',
    });
    
    function mouseMoveAnim(event) {
  const moveMe = event.currentTarget.querySelector(".move-me");
  const moveMe2 = event.currentTarget.querySelector(".move-me2");
  const moveMe3 = event.currentTarget.querySelector(".move-me3");
  
  const rect = moveMe.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  
  const tiltX = (offsetY / rect.height - 0.2);
  const tiltY = (offsetX / rect.width - 0.5);
  
  gsap.to(moveMe, {
    duration: 0.3,
    rotationY: tiltY,
    rotationX: tiltX,
    overwrite: true
  });
  
  gsap.to(moveMe2, {
    duration: 0.3,
    rotationY: 5 * tiltY,
    rotationX: -5 * tiltX,
    overwrite: true
  });

  gsap.to(moveMe3, {
    duration: 0.2,
    rotationX: 20 * tiltX,
    rotationY: -20 * tiltY,
    x: 5 * tiltX,
    y: -5 * tiltY,
    overwrite: true
  });
}
    
    function mouseLeaveAnim() {
      gsap.to(moveMe, {
        delay: 0.2,
        duration: 0.4,
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        ease: "power1.inOut"
      });
      gsap.to(moveMe2, {
        delay: 0.2,
        duration: 0.4,
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        ease: "power1.inOut"
      });
    }
    element.addEventListener("mousemove", mouseMoveAnim);
    element.addEventListener("mouseleave", mouseLeaveAnim);
    console.log(moveMe2)
  });
});
</script>

<style scoped>
.min-h-screen {
    min-height: none;
}
.content {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

@media (max-width: 1536px) {
  .content {
    gap: 48px;
  }
}
@media (max-width: 768px) {
  .content {
    gap: 20px;
  }
}
@media (min-width: 1024px) {
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 96px;
  }
}
</style>
