<script>
import AuthentificationService from '@/services/AuthentificationService';

export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods : {
        async login () {
            const response = await AuthentificationService.login({
                email: this.email,
                password: this.password
            }) 
            console.log(response)
        }
    }

}

</script>

<template>
    <div class="title-container">
        <h1>Visit the most beautiful places with MTL Student Spot</h1>
    </div>

    <div class="login-container">
        <h2>Login</h2>
    </div>

    <form class="form-container" @submit.prevent="login" >
        <div class="input-pair">
            <label for="">Email</label>
            <input type="text" placeholder="Enter mail">
        </div>

        <div class="input-pair">
            <label for="">Password</label>
            <input type="text" placeholder="Enter Password">
        </div>

        <div class="button-container">
            <button class="submit">Login</button>
        </div>
    </form>

    
</template>

<style scoped >

.title-container h1{
    padding: 5rem;
    font-size: 2rem;    
    text-align: center;
}

.login-container {
    background-color: #A5BDD9;
    padding: 4rem;
    text-align: center;
}

h2{
    font-size: 2rem;
}

.form-container{
    background-color: #a2c4ec;;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
}

.input-pair{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2rem;
    gap: 0.1rem;
}


.button-container {
    background-color: #9EB3CB;
    padding: 4rem ;
    display: flex;
  justify-content: center;
  align-items: center;
}

@media (prefers-color-scheme: dark) {
    .login-container {
        background-color: #a5bdd957;
    }
    .form-container {
        background-color: #a2c4ec75;
    }
    .button-container {
        background-color: #9eb3cb48;
    }
}

</style>