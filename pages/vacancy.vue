<template>
    <section class="text-white body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto">
            <div class="w-full md:w-1/2 mb-10 md:mb-0">
                <h1 class="sticky top-20 text-4xl md:text-6xl lg:text-[66px]">Построй карьеру вместе с Athena Plus</h1>
            </div>
            <div class="w-full md:w-1/2">
                <img src="/img/career.png" alt="" class="max-w-full" />
                <p class="my-4 max-w-[600px]">
                    Athena Plus это Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button class="btn-primary hover:btn--shadow">Подать заявку</button>
            </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
            <div class="w-full px-4 pt-16">
                <div class="mx-auto w-full p-2">
                    <VacancyVkladki/>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.text-gradient {
    background: -webkit-linear-gradient(#FCB040, #FF2BFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>