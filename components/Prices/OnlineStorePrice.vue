<template>
    <section class="text-white">
      <div class="lg:flex items-start">
        <div class="border py-5 px-5 lg:w-1/2">
          <div class="lg:flex justify-between items-center">
            <h3 class="font_Airborne text-center sm:text-left text-[20px] md:text-[16px] lg:text-[20px] xl:text-[26px]">Интернет магазин</h3>
            <h4 class="font_Airborne text-center sm:text-left text-[20px] md:text-[16px] lg:text-[20px] xl:text-[26px]">от 700 000 тг</h4>
          </div>
          <p class="text-center sm:text-left text-base xl:text-[20px] mt-5">Для бизнесов, которым требуется более подробно рассказать о своем продукте, услугах, компании и команде, а также предоставить больше информации в различных аспектах</p>
          <button class="font_Airborne xl:text-lg bg-white w-full py-4 mt-5 text-black">
            <span>Этапы работы</span>
          </button>
        </div>
        <div id="price-pin" class="lg:w-1/2">
          <PriceStagesThirdStage />
          <button class="font_Airborne xl:text-lg bg-white w-full py-4 mt-5 text-black hidden lg:block">
            <span>Записаться на консультацию</span>
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  
  </style>