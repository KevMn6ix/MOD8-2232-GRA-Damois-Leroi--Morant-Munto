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
    <main>
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
</main>

    
</template>

<style scoped>
main {
background-image: url('../assets/montrealbynight.jpg');
  color: #FFF; /* Set text color for contrast */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  gap: 2rem;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 2rem;
}

.form-container {
 
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  color: #000; /* Set text color for form inputs */
}

.input-pair {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
}

.button-container {
 
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>