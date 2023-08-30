<template>
  <div>
    <active-user :username="user.name" :age="user.age"></active-user>
    <user-data @user-entered="changeActive"></user-data>
  </div>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
export default {
    components: { ActiveUser, UserData },
    data () {
        return{
            user:{
                name:'Ramiro P',
                age:38,
            },
        }
    },
    methods:{
        changeActive(name,age){
            this.user={
                name : name,
                age : +age,
                
            }
        }
    }
}
</script>

<style>
section{
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border:1px solid lightslategray;
    padding: 1rem;
}
html{
    font-family: sans-serif;
}
</style>