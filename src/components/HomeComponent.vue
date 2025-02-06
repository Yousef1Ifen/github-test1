<template>
<HeaderComponent/>
<h1>Hello {{name}}, welcomeon home page</h1>
<div class="table-container">
<table border ="1">
    <tr>
        <td>
            ID
        </td>
        <td>
            Name
        </td>
        <td>
            Contact
        </td>
        <td>
            Adresse
        </td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td>
            {{ item.id }}
        </td>
        <td>
            {{ item.name }}
        </td>
        <td>
            {{ item.contact }}
        </td>
        <td>
            {{ item.address }}
        </td>

    </tr>
</table>
</div>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue';

export default{
    name:'HomeComponent',
    data() {
        return {
            name:'',
            restaurant:[],
        }
    },
    components:{
        HeaderComponent
    },
    async mounted() {
            let user= localStorage.getItem('user-info');
            this.name=JSON.parse(user).name;
            if(!user){
                this.$router.push({name:'SignUp'})
            }
            let result =  await axios.get("http://localhost:3000/restaurants")
            this.restaurant=result.data;
        },
}

</script>
<style>
.table-container{
display: flex;
justify-content: center;
align-items: center;
}
table{
    border-collapse: collapse;
    
    text-align: center;
}
tr,td{
    width: 160px;
    height: 40px;
    padding-left: 6px;
    background-color: rgb(206, 201, 201);
    color: rgb(0, 0, 0);
    border: 3px solid rgb(0, 0, 0);
    
}
</style>

