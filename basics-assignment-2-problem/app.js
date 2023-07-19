const app = Vue.createApp({
    data(){
        return{
            firstOutput : '',
            secondOutput:'',
        }
    },
    methods:{
        showAlert(){
            alert('shown');
        },
        updateFirstText(event){
            this.firstOutput = event.target.value;
        },
        updateSecondText(event){
            this.secondOutput = event.target.value;
        },
    }
});
app.mount('#assignment');
