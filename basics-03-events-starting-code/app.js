const app = Vue.createApp({
  data() {
    return {
      name:'',
      counter: 14,
      confirmedName:'',
    };
  },
  methods:{
    add(value){
      this.counter += value;
    },
    reduce(value){
      this.counter -= value;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    confirmName(){
      this.confirmedName =  this.name;
    },
    submitForm(event){
      alert(event.target)
    },
  }
});

app.mount('#events');
