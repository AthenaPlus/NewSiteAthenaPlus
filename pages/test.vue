<template>
    <div class="overflow-hidden">
        <div class="lg:flex lg:justify-end">
            <div v-for="(item, index) in items" :key="index" class="md:py-2 lg:py-5 lg:pr-20" ref="itemRefs"
                @mousemove="handleMouseMove(index, $event)">
                <img :src="item.img" alt="" class="" ref="imageRefs" />
                <div
                    class="item-div relative bottom-8 left-3 xs:bottom-10 sm:bottom-14 sm:left-10 md:bottom-16 lg:left-0 lg:bottom-20 lg:pt-3 xl:pt-0 xl:bottom-20 2xl:bottom-24">
                    <p
                        class="item-title text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font_Airborne lg:p-7">
                        {{ item.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    img: "/img/ServiceImg1.png",
                    title: "Image 1",
                },
                {
                    img: "/img/ServiceImg2.png",
                    title: "Image 2",
                },
                {
                    img: "/img/ServiceImg3.png",
                    title: "Image 3",
                },
                {
                    img: "/img/ServiceImg4.png",
                    title: "Image 4",
                },
            ],
        };
    },
    methods: {
        handleMouseMove(index, event) {
            const imageRef = this.$refs.imageRefs[index];
            const itemRef = this.$refs.itemRefs[index];
            const boundingRect = itemRef.getBoundingClientRect();

            const mouseX = event.clientX - boundingRect.left;
            const mouseY = event.clientY - boundingRect.top;

            const width = boundingRect.width;
            const height = boundingRect.height;

            const xAxis = (width / 2 - mouseX) / 20;
            const yAxis = (height / 2 - mouseY) / 20;

            imageRef.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        },

    },
}
</script>

<style scoped></style>