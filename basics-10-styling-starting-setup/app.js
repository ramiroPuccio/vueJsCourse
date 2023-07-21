const app =  Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods:{
        selectBox(box){
            if(box === 'A') this.boxASelected = true;
            if(box === 'B') this.boxBSelected = true;
            if(box === 'C') this.boxCSelected = true;
        },
        unSelectBox(box){
            if(box === 'A') this.boxASelected = false;
            if(box === 'B') this.boxBSelected = false;
            if(box === 'C') this.boxCSelected = false;
        }
    },
    computed:{
        boxAClases(){
            return { active: this.boxASelected };
        }
    }
});
app.mount('#styling');