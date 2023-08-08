const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id:'manuel',
                    name:'Manuel Lorenz',
                    phone:'3516791866',
                    email:'manu@mailfalso.com',
                },
                {
                    id:'juan',
                    name:'Januel Jorenz',
                    phone:'351671231866',
                    email:'janu@mailfalso.com',
                },
            ],
            
        };
    },
    methods:{
        
    },
});
app.component('friend-contact',{
    template: `<li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}} </li>
      <li><strong>Email:</strong> {{friend.email}} </li>
    </ul>
  </li>`,
    data() {
        return{
            detailsAreVisible: false,
            friend:{
                id:'juan',
                name:'Januel Jorenz',
                phone:'351671231866',
                email:'janu@mailfalso.com',
            },
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});
app.mount('#app');