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
    <div id="enter">
    <h3>
        <slot>
        </slot>
    </h3>
    <input :type="inputType.Type" v-model="UserInput" @input="sendUserInput">
    </div>
</template>
<style scoped>
h3 {
    text-align: center;
}
input {
    min-width: 30px;
    width: 30%;
}
#enter {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>