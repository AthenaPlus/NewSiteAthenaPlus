<template>
    <div class="popup mx-auto">
        <div class="popup-header flex flex-row items-center justify-between p-3">
            <span>{{ popupTitle }}</span>
            <span @click="closePopup">
                <XMarkIcon class="w-6 h-6"/>
            </span>
        </div>
        <div class="popup-content">
            <slot></slot>
        </div>
        <div class="popup-footer flex flex-row items-center justify-end p-3">
            <button @click="closePopup"  class="bg-pink-500 text-white px-6 py-2">Закрыть</button>
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
    }
}

</script>

<style scoped>
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