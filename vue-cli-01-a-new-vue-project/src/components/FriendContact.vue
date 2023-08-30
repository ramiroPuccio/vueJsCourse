<template>
    <section>
        <li>
    <h2>{{ name }}</h2>
    <h3>{{ isFavorite ? '(Favorite)':'' }}</h3>
    <button @click="toggleFavorite()">{{isFavorite ? 'Remove from' : 'Add to' }} Favorites</button>
    <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{phoneNumber}} </li>
      <li><strong>Email:</strong> {{emailAddress}} </li>
    </ul>
    <button @click="$emit('delete-friend', id)">Delete</button>
  </li>
    </section>
</template>
<script>
export default {
    // props: ['name','phoneNumber','emailAddress','isFavorite'],
    props:{
        id:{
            type: String,
            required:true
        },
        name:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required:true
        },
        emailAddress:{
            type: String,
            required:true
        },
        isFavorite: {
            type: Boolean,
            required:false,
            default: false,
            
        },
    },
    emits:['toggle-favorite', 'delete-friend', ],
    // emits:{
    //     'toggle-favorite': function(id){
    //         if(id){
    //             return true;
    //         } else {
    //             console.log('id missing')
    //             return false;
    //         }
    //     }
        
    // },
    data(){
        return{
            detailsAreVisible: false,
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
            this.$emit('toggle-favorite', this.id);// always kebab case
            // this.friendIsFavorite =  !this.friendIsFavorite;
        },
        deleteFriend(){
            this.$emit('delete-friend', )
        },
    }
}
</script>