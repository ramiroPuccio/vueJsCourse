const app = Vue.createApp({
  data() {
    return {
      name:'',
      counter: 14,
      confirmedName:'',
      // fullName:'',
      lastName:'',
    };
  },
  watch:{
    counter (value){
      if(value > 50) this.counter = 0 ;
    }
    // name(value){
    //   if (value !== ''){
    //     this.fullName = value + ' ' + this.lastName
    //   }
    // },
    // lastName(value){
    //   if (value !== ''){
    //     this.fullName = this.name + ' ' + value
    //   }
    // }
  },
  methods:{
    outputFullName(){
      if (this.name !== ''){
        return this.name + ' ' + 'Puccio';
      }
    },
    add(value){
      this.counter += value;
    },
    reduce(value){
      this.counter -= value;
    },
    setName(event, lastName){
      this.name = event.target.value 
    },
    confirmName(){
      this.confirmedName =  this.name;
    },
    submitForm(event){
      alert(event.target)
    },
    resetInput(){
      this.name = '';
      this.lastName='';
    }
  },
  computed: {
    fullName(){
      console.log('Runing computed');
      if (this.name !== '' && this.lastName !== ''){
        return this.name + ' ' + this.lastName;
      } else return '';
    }
  },
});

app.mount('#events');
