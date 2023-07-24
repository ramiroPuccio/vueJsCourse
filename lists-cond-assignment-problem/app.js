const app = Vue.createApp({
    data(){
        return{
            tasks:[],
            userInput:'',
            isHidden:false,
            buttonCaption:'Hide'
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.userInput);
        },
        showHide(){
            this.isHidden = !this.isHidden
            if (this.buttonCaption == "Hide") this.buttonCaption = 'Show'
            else this.buttonCaption = 'Hide';
        }
    }
});
app.mount('#assignment');