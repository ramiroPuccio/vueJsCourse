const app = Vue.createApp({
    data(){
        return{
            clase:'',
            visibility: true,
            userBkgnd:'',
        }
    },
    computed:{
        userClass(){
            return this.clase
        },
    },
    methods:{
        toggleVisibility(){
            this.visibility = !this.visibility;
        }
    }
})
app.mount('#assignment');