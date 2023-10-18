<script>
import { RouterLink } from 'vue-router';
import BarOutsideHome from './BarOutsideHome.vue';
import AuthentificationService from '@/services/AuthentificationService';

export default{
    name: 'RegisterForm',
    data() {
        return {
            last_name: '',
            first_name: '',
            email: '',
            phone_number: '',
            password: '',
            passwordConfirm: ''
        };
    },
    methods: {
        async register () {
            const response = await AuthentificationService.register({
                last_name: this.lastName,
                first_name: this.firstName,
                email: this.email,
                phone_number: this.phoneNumber,
                password: this.password,
                passwordConfirm: this.passwordConfirm
            })
            console.log(response);
        } ,

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
    <main>
        <div class="page-bg">
        <h1>Contribute to the sharing of the most beautiful places in Montréal with MTL Student Spot !</h1>
        <h2>Join Now !</h2>

        <form @submit.prevent="register" >
            <h2>Sign Up</h2>
            <div class="input-pair">
                <label for="">Last Name</label>
                <input type="text" placeholder="Last Name" v-model="lastName" />
            </div>
            <div class="input-pair">
                <label for="">First Name</label>
                <input type="text" placeholder="First Name" v-model="firstName"/>
            </div>
            <div class="input-pair">
                <label for="">Email</label>
                <input type="email" placeholder="Email Adress" v-model="email"/>
            </div>

            <div class="input-pair">
                <label for="">Phone Number</label>
                <input type="tel" placeholder="Last Name" v-model="phoneNumber"/>
            </div>
            <div class="input-pair">
                <label for="">Password</label>
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <div class="input-pair">
                <label for="">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" v-model="passwordConfirm">
            </div>
            <button class="submit" >Register</button>
        </form> 
        </div> 
    </main>  
</template>

<style scoped>



header {
    padding-top: 1%;
    padding-bottom: 1%;
    z-index: 1000;  
  @media (prefers-color-scheme: dark) {
    header {
  background-color: #a2c4ec9d;
}
  }
  
}


main{

    background-image: url('../assets/party.jpg');
    background-size: 1520px; 
    background-repeat: repeat;  
    background-position: 30%;  
    position: relative;
    z-index: 1;
}

main::before{

    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(2, 7, 16, 0.54);  
    z-index: -1; 

}

h1{
    padding: 5rem;
    font-size: 2rem;    
    text-align: center;
}

h2{
    display: flex;
    justify-content: center;
}

form{
    
    border: 2px solid black;
    padding : 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*width: 500px;
    
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;*/
}

.input-pair{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2rem;
    gap: 0.1rem;
}

.submit{
    margin-top: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

</style>