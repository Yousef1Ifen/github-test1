<template>
<HeaderComponent/>
<h1>Hello {{name}}, welcomeon to update</h1>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';

export default{
    name:'HomeComponent',
    data() {
        return {
            name:''
        }
    },
    components:{
        HeaderComponent
    },
    mounted() {
            let user= localStorage.getItem('user-info');
            this.name=JSON.parse(user).name
            if(!user){
                this.$router.push({name:'SignUp'})
            }
        },
}

</script>

