<template>
    <section class="text-white body-font">
        <div class="container px-5 py-16 md:py-24 mx-auto">
            <!-- Блок СОВРЕМЕННАЯ ВЕБ СТУДИО -->
            <div class="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 border-b-2 border-white/70 pb-10">
                <div class="w-full lg:w-1/2">
                    <h1 class="sticky top-14 uppercase text-[32px] leading-[40px] lg:text-[80px] lg:leading-[92px] animate__animated animate__fadeInLeft animate__delay-0.5s">Современная веб студия</h1>
                </div>
                <div class="w-full lg:w-1/2">
                    <!-- <h2 class="font_Airborne uppercase text-[32px] md:text-[80px] mt-0 lg:mt-28 mb-10 md:mb-5">мы создаем <br
                            class="hidden lg:inline-block" /> ваш дизайн</h2> -->
                    <p class="text-xl md:text-[20px] font-normal leading-8 animate__animated animate__fadeInRight animate__delay-1s">Athena Plus - это мечта двух студентов создавать сайты мирового уровня. Повышение качества сайтов и уровня разработчиков, является нашим кредо и первостепенной задачей.
                                Наша цель - попасть в топ мировых веб-студий. Наша миссия - помогать бизнесу при помощи качественного UX/UI и чистого кода. 
                    </p>
                </div>
            </div>
            <!-- Блок  НАШЕ АГЕНСТВО -->
            <div class="flex flex-col lg:flex-row gap-5 lg:gap-10 border-b-2 border-white/70 py-10  md:pt-[50px] md:pb-10">
                <div class="w-full lg:w-1/3">
                    <h3 class="sticky top-14 uppercase font_Airborne text-[30px] md:text-[50px] leading-tight">Наше агентство</h3>
                </div>
                <div class="w-full lg:w-2/3">
                    <div class="grid grid-flow-col-1 md:grid-cols-2 gap-5  md:gap-[75px]">
                        <div v-for="agencyItem in agencyItems" :key="agencyItem.index" class="">
                            <span class="text-[20px] md:text-[26px] font-semibold">{{ agencyItem.subTitle }}</span>
                            <h3 class="font_Airborne text-[30px] md:text-[50px]">{{ agencyItem.title }}</h3>
                            <p class="text-base mb-2">
                                {{ agencyItem.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Блок Методы работы -->
            <div class="flex flex-col lg:flex-row gap-5 lg:gap-10 border-b-2 border-white/70 pt-[50px] pb-10">
                <div class="w-full lg:w-1/3">
                    <h3 class="sticky top-14 uppercase font_Airborne text-[30px] md:text-[50px] leading-tight">Методы работы</h3>
                </div>
                <div class="w-full lg:w-2/3">
                    <div class="grid grid-flow-col-1 md:grid-cols-2 gap-5  md:gap-[75px]">
                        <div v-for="methodItem in methodItems" :key="methodItem.index" class="">
                            <span class="text-[20px] md:text-[26px] font-semibold">{{ methodItem.subTitle }}</span>
                            <h3 class="font_Airborne text-[30px] md:text-[50px]">{{ methodItem.title }}</h3>
                            <p class="text-base mb-2">
                                {{ methodItem.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconArrowright from '~/assets/icons/arrow__right.svg'

useHead({
  title: 'О Нас AthenaPlus',
  htmlAttrs: {
      lang: 'ru',
    },
  meta: [
    { name: 'description', content: 'Athena Plus - это мечта двух студентов создавать сайты мирового уровня. Повышение качества сайтов и уровня разработчиков, является нашим кредо и первостепенной задачей. Наша цель - попасть в топ мировых веб-студий. Наша миссия - помогать бизнесу при помощи качественного UX/UI и чистого кода.' }
  ]
})

const agencyItems = [
    {
        subTitle: 'Специалистов',
        title: '7',
        description: 'Первоклассные дизайнеры, разработчики, маркетологи и бренд-специалисты. Фанаты своего дела. '
    },
    {
        subTitle: 'На рынке',
        title: '3 года',
        description: 'Год в качестве IT-аутсорса крупных логистических компаний. Год в качестве веб-студии нового образца.'
    },
    {
        subTitle: 'Проектов',
        title: '50',
        description: 'От Landing-Page до крупных интернет-порталов, интернет-магазинов и CRM-систем.'
    },
    {
        subTitle: 'Опыта',
        title: '10 лет',
        description: 'Средневзвешенный рабочий опыт сотрудника "Athena Plus"'
    }
]

const methodItems = [
    {
        subTitle: 'Аналитика и разработка ТЗ',
        title: 'Исследование',
        description: 'Проведем часовое интервью с профессиональным светом и звукозаписью. На основании данного интервью сформируется техническое задание и бриф. Далее, анализируем конкурентов и ваши сильные стороны.'
    },
    {
        subTitle: 'Прототипирование страниц',
        title: 'Дизайн',
        description: 'Используя информацию о ваших сильных сторонах, мы формируем дизайнерскую концепцию для сайта. Продумываем качественный User Experience и User Interface для самой лучшей конверсии лида в клиента.'
    },
    {
        subTitle: 'Кодовая Реализация',
        title: 'Разработка',
        description: 'Дизайн и стратегия готовы? Время кодить! Проводится верстка проекта на оптимальных технологиях, внедряем лучшие анимационные библиотеки на рынке. Если проект технически тяжелый - внедряем backend-разработку.'
    },
    {
        subTitle: 'Продвижение в Сети',
        title: 'Маркетинг',
        description: 'Digital-маркетинг включает в себя рекламу в социальных сетях,  поисковую оптимизацию, контент-маркетинг. Цель - достижение клиентов, где они находятся онлайн и привлечение их к вашему бизнесу.'
    }
]

</script>


<style scoped>


</style>