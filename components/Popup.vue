<template>
    <div class="popup_wrapper absolute inset-0 flex justify-center items-center bg-slate-900/90" ref="popup_wrapper">
        <div class="popup mx-auto">
            <div class="popup-header flex flex-row items-center justify-between p-3">
                <h2 class="text-2xl">{{ popupTitle }}</h2>
                <button @click="closePopup" class="flex items-center">
                    <span>close</span>
                    <XMarkIcon class="w-6 h-6 ml-2" />
                </button>
            </div>
            <div class="popup-content">
                <slot></slot>
            </div>
            <div class="popup-footer flex flex-row items-center justify-end p-3">
                <button @click="closePopup" class="btn">Закрыть</button>
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
    .popup {
        padding: 16px;
        position: fixed;
        top: 40%;
        right: 0;
        left: 0;
        width: 50%;
    }
    .popup-content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>