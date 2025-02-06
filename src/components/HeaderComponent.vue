<template>
<div class="nav">
<router-link to="/">Home</router-link>
<router-link to="/Add">Add Restaurant</router-link>
<router-link to="/Update">UpdateReastaurant</router-link>
<a v-on:click=logout>Logout</a>
</div>
</template>

<script>

export default {
    name: 'HeaderComponent',
    methods: {
        logout(){
        localStorage.clear(),
        this.$router.push({name:'LoginComponent'})
    }
    },
}
</script>
<style>
.nav {
    background-color: rgb(26, 29, 28);
    overflow: gray;
}
.nav a {
    color: gainsboro;
    padding: 16px;
    text-align: center;
    font-size: 25px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover {
    background-color: rgb(252, 252, 255);
    color: rgb(75, 41, 172);
}
</style>