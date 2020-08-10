<template>
    <div class="page">
        <h3>{{title}}</h3>
        <Page1 v-if="$parent.index===1"></Page1>
        <Page2 v-if="$parent.index===2"></Page2>
        <Page3 v-if="$parent.index===3"></Page3>

    </div>
</template>

<script>
    import Page1 from './Pages/Page1.vue'
    import Page2 from './Pages/Page2.vue'
    import Page3 from './Pages/Page3.vue'

    export default {
        name: 'Page',
        components: {
            Page1,
            Page2,
            Page3
        },
        computed: {
            title: function() {
                return this.$parent.pages[this.$parent.index - 1].name
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page {
        overflow: scroll;
    }

    input {
        margin: 100px;
    }


    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    h3 {
        margin-top: 40px;
        margin-bottom: 40px;
    }

</style>
