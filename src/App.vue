<template>
<router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0ea4f0;
  
}
body{
  padding: 0;
  margin: 0;
}
.logo{
    width: 150px;
}
.register input, .login input{
    width: 250px;
    height: 30px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
    background-color: rgb(206, 201, 201);
    border-radius: 15px;
   
}
.register button, .login button{
    width: 200px;
    height: 30px;
    border: 1px solid seagreen;
    background-color: blueviolet;
    color: aliceblue;
    border-radius: 15px;
}
</style>
