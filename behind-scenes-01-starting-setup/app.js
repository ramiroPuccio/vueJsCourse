const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
      // this.currentUserInput (usando @input="currentUserInput en el html en vez de ref="userText");
    },
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created(){},
  beforeMount(){},
  mounted(){},
  beforeUpdate(){},
  updated(){},
  beforeUnmount(){},
  unmounted(){
    setTimeout(function () {
      app.mount('#app')
    }
    ,2000)
  },
});

app.mount('#app');
function unmountapp(){
  app.unmount();
}