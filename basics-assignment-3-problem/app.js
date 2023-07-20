const app =  Vue.createApp({
    data(){
        return{
            result:'',
            message:'',
        }
    },
    methods:{
        add(value){
            this.result += value;
        }
    },
    watch:{
        result(value){
            if (value < 37 ){
                this.message = 'Not There Yet'
            }else if (value == 37){
                this.message = value;
            } else {
                this.message = 'Too Much !!'
            }
            const that = this;
            setTimeout(()=>{that.result = 0;},5000);
        }
        
    },
    computed:{
        
    },
});
app.mount('#assignment');