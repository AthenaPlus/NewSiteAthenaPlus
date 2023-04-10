<template>
    <div class="popup_wrapper inset-0 flex justify-center items-center bg-[#0B0B0B] min-h-screen" ref="popup_wrapper">
        <button @click="closePopup" class="flex items-center right-2 top-2 md:right-[76px] md:top-[60px] fixed z-50">
            <span class="text-[26px] font-semibold">Закрыть</span>
            <XMarkIcon class="w-6 h-6 ml-2" />
        </button>
        <div class="max-w-[856px] mx-auto w-full max-h-screen overflow-y-auto">
            <div class="popup-header flex flex-row items-center justify-between p-3">
            </div>
            <div class="popup-content px-5">
                <slot></slot>
            </div>
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
    .popup-content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>