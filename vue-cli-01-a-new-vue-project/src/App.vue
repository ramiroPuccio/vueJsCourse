<template>
    <section>
        <h2>My friends</h2>
        <ul>
            <li></li>
        </ul>
    </section>
</template>
<script>
export default {
    data() {
        return{
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
        }
    },
}
</script>