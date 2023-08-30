
<template>
  <section>
    <form @submit.prevent="submitData">
        <input type="text" v-model="userName" placeholder="name" />
        <input type="text" v-model="userAge" placeholder="age">
        <button>Set user data</button>
    </form>
  </section>
</template>

<script>
export default {
    emits:['user-entered'],
    data (){
        return{
            userName:'',
            userAge:'',
        }
    },
    methods:{
        submitData(){
            this.$emit('user-entered', this.userName, this.userAge);
        }
    }
};
</script>

<style>

</style>