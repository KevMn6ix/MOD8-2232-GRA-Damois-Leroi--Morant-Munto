<script>
import BarOutsideHome from './BarOutsideHome.vue';
import AuthentificationService from '@/services/AuthentificationService';

export default {
    name: 'RegisterForm',
    data() {
        return {
            last_name: '',
            first_name: '',
            email: '',
            phone_number: '',
            password: '',
            passwordConfirm: '',
            errorMessage: ''
        };
    },
    methods: {
        async register() {         
           
               const message = await AuthentificationService.register({
                    last_name: this.last_name,
                    first_name: this.first_name,
                    email: this.email,
                    phone_number: this.phone_number,
                    password: this.password,
                    passwordConfirm: this.passwordConfirm
                })
                console.log(message)
    

        },

        handleSubmit() {
            const userData = {
                last_name: this.last_name,
                first_name: this.first_name,
                email: this.email,
                phone_number: this.phone_number,
                password: this.password,
                passwordConfirm: this.passwordConfirm
            };
            console.log(userData);
            console.log("Registered");
        }
    },
    components: { BarOutsideHome }
}

</script>

<template>
    <header>
        <BarOutsideHome />
    </header>
    <div class="page-bg">
        <h1>Visit the most beautiful places with MTL Student Spot !</h1>

        <form @submit.prevent="register">
            <h2>Sign Up</h2>
            <div class="input-pair">
                <label for="">Last Name</label>
                <input type="text" placeholder="Last Name" v-model="last_name" required minlength="2"/>
            </div>
            <div class="input-pair">
                <label for="">First Name</label>
                <input type="text" placeholder="First Name" v-model="first_name" required minlength="2"/>
            </div>
            <div class="input-pair">
                <label for="">Email</label>
                <input type="email" placeholder="Email Adress" v-model="email" required/>
            </div>

            <div class="input-pair">
                <label for="">Phone Number</label>
                <input type="telephone" placeholder="Last Name" v-model="phone_number" required pattern="[0-9]{10}" minlength="2"/>
            </div>
            <div class="input-pair">
                <label for="">Password</label>
                <input type="password" placeholder="Password" v-model="password" required>
            </div>
            <div class="input-pair">
                <label for="">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" v-model="passwordConfirm" required>
            </div>
            <div v-if="errorMessage">{{ errorMessage.value }}</div>
            <button class="submit">Register</button>
        </form>
    </div>
</template>

<style scoped>
* {
    color: black;

    @media (prefers-color-scheme: dark) {
        color: white;

    }
}

header {
    padding-top: 1%;
    padding-bottom: 1%;

    @media (prefers-color-scheme: dark) {
        header {
            background-color: #a2c4ec9d;
        }
    }
}



.page-bg {
    background-color: #A5BDD9;

    @media (prefers-color-scheme: dark) {
        background-color: #93ABC775;
    }
}

h1 {
    padding: 5rem;
    font-size: 2rem;
    text-align: center;
    background-color: white;

    @media (prefers-color-scheme: dark) {
        background-color: black;
    }
}

h2 {
    display: flex;
    justify-content: center;
}

form {

    border: 2px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*width: 500px;
    
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;*/
}

.input-pair {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2rem;
    gap: 0.1rem;
}

.submit {
    margin-top: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
</style>