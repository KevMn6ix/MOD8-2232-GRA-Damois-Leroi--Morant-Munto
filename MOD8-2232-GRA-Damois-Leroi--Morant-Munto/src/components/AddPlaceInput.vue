<script setup>
import { ref } from 'vue'
const emit = defineEmits(['user-input'])
const UserInput = ref('')
function sendUserInput() {
    console.log(UserInput.value)
    emit('user-input', UserInput.value)
}
const inputType = defineProps({
    Type: String
})
</script>
<template>
    <h3>
        <slot>
        </slot>
    </h3>
    <input :type="inputType.Type" v-model="UserInput" @input="sendUserInput">
</template>