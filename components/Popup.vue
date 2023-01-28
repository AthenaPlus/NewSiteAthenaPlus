<template>
    <div class="popup_wrapper fixed inset-0 flex justify-center items-center bg-[#0B0B0B] min-h-screen" ref="popup_wrapper">
        <button @click="closePopup" class="flex items-center right-2 top-2 md:right-[76px] md:top-[60px] fixed z-50">
            <span class="text-[26px] font-semibold">Закрыть</span>
            <XMarkIcon class="w-6 h-6 ml-2" />
        </button>
        <div class="max-w-[856px] mx-auto w-full max-h-screen overflow-y-auto">
            <div class="popup-header flex flex-row items-center justify-between p-3">
                <!-- <h2 class="text-2xl">{{ popupTitle }}</h2> -->
            </div>
            <div class="popup-content px-5">
                <slot></slot>
            </div>
            <!-- <div class="popup-footer flex flex-row items-center justify-end p-3">
                <button @click="closePopup" class="btn">Закрыть</button>
            </div> -->
        </div>
    </div>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/20/solid'
export default {
    components: {
        XMarkIcon
    },
    props: {
        popupTitle: {
            type: String,
            default: 'PopUp Окно'
        }
    },
    methods: {
        closePopup() {
            this.$emit('closePopup')
        }
    },
    mounted() {
        let vm = this
        document.addEventListener('click', function(item){
            if (item.target === vm.$refs['popup_wrapper']){
                vm.closePopup()
            }
        })
    }
}

</script>

<style scoped>
    .popup_wrapper {
        z-index: 100000;
    }
    /* .popup {
        padding: 16px;
        position: fixed;
        top: 40%;
        right: 0;
        left: 0;
        width: 50%;
    } */
    .popup-content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>