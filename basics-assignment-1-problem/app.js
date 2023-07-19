const app = Vue.createApp({
    data(){
        return{
            name:'Ramiro Puccio',
            age:38,
            googleImage: 'https://previews.123rf.com/images/argus456/argus4561605/argus456160536628/57498218-for-example-3d-rendering-a-red-shiny-sticker.jpg'
            
        }
    },
    methods:{
        randomNumber(){
            return  Math.random();
        }
    }
})
app.mount('#assignment')