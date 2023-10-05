<script>

export default{
    data() {
        return {
            user : {
                lastName: '',
                firstName: '',
                email: '',
                phoneNumber: '',
                password: '',
            }
        }
    },
    methods : {
        onSubmit(data) {
            if(data.password !== data.confirmedPassWord) {
                return
            }
        }
    }
}

</script>

<template>
    
    <div class="background">
        <h1>Visit the most beautiful places with MTL Student Spot !</h1>

    <form>
        <h2>Sign Up</h2>
        <div class="input-pair">
            <label for="">Last Name</label>
            <input type="text" placeholder="Last Name">
        </div>
        <div class="input-pair">
            <label for="">First Name</label>
            <input type="text" placeholder="First Name">
        </div>
        <div class="input-pair">
            <label for="">Email</label>
            <input type="email" placeholder="Email Adress">
        </div>

        <div class="input-pair">
            <label for="">Phone Number</label>
            <input type="tel" placeholder="Last Name">
        </div>
        <div class="input-pair">
            <label for="">Password</label>
            <input type="password" placeholder="Password">
        </div>
        <div class="input-pair">
            <label for="">Confirm Password</label>
            <input type="password" placeholder="Confirm Password">
        </div>   
        
        <input class="submit" type="submit" value="Register">
    </form>
    </div>
    
</template>

<style>

.background{
}

h1{
    margin: 4rem;
}

h2{
    display: flex;
    justify-content: center;
}

form{
    border: 2px solid black;
    padding : 20px;
    margin: 0 30rem;
}

.submit{
    margin-top: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
</style>