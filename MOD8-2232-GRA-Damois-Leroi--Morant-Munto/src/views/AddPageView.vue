<script>
import { RouterLink } from 'vue-router';
import TheAddPlaceForm from '../components/TheAddPlaceForm.vue';
import BarOutsideHome from '../components/BarOutsideHome.vue';
export default{
    name: 'RegisterForm',
    data() {
        return {
            lastName: '',
            firstName: '',
            email: '',
            phoneNumber: '',
            password: '',
            passwordConfirm: ''
        };
    },
    methods: {
        handleSubmit() {
            const userData = {
                lastName: this.lastName,
                firstName: this.firstName,
                email: this.email,
                phoneNumber: this.phoneNumber,
                password: this.password,
                passwordConfirm: this.passwordConfirm
            };
            console.log(userData);
            console.log("Registered");
        }
    },
    components: { RouterLink, BarOutsideHome }
}

</script>
<template>
    <header>
        <BarOutsideHome/>
    </header>
    <h1>
        Reference any place you like to hang out
    </h1>
    <TheAddPlaceForm @user-input="(termInputed) => {UserInput.Address = termInputed}"/>
</template>