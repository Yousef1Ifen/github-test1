<template>
    <img class="logo" src="../assets/resto-logo.png">
    <h1>Login</h1>
<div class="login">
    <input type="text" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <button v-on:click="login">Login</button>

    <p>
        <router-link to="/sign-up">SignUp</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios';

export default{
    name:'LoginComponent',
    data() 
        {
            return{
                email:'',
                password:''
            }
            
        },
    methods: {
       async login(){
        let result = await axios.get(
            `http://localhost:3000/user?email=${this.email}&password=${this.password}`

        ) 
        if (result.status==200 && result.data.length>1)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[1]))
                this.$router.push({name:'HomeComponent'})
            }       
        else{
            alert("Name or Password sind flasch")
            
        }    
        }
    },
    mounted() {
            let user= localStorage.getItem('user-info');
            if(user){
            this.$router.push({name:'HomeComponent'})
            }
        },
};

</script>

<style>

</style>