<template>
    <div class="page">
        <br>
        <Page1 v-show="$parent.index===1"></Page1>
        <Page2 v-if="!$parent.advanced" v-show="$parent.index===2"></Page2>
        <Page3 v-if="!$parent.advanced" v-show="$parent.index===3"></Page3>
        <Page4 v-if="!$parent.advanced" v-show="$parent.index===4"></Page4>
        <Page5 v-show="$parent.index===5"></Page5>
    </div>
</template>

<script>
    import Page1 from './Pages/Page1.vue'
    import Page2 from './Pages/Page2.vue'
    import Page3 from './Pages/Page3.vue'
    import Page4 from './Pages/Page4.vue'
    import Page5 from './Pages/Page5.vue'

    export default {
        name: 'Page',
        components: {
            Page1,
            Page2,
            Page3,
            Page4,
            Page5,
        },
        computed: {
            title: function() {
                if (this.$parent.index === 1) {
                    return "Welcome to the Rentrax Setup Wizard"
                } else {
                    return this.$parent.pages[this.$parent.index - 1].name
                }
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        height: 100%;
    }


    .no-gutters {
        padding: 0 !important;
    }



    .title {
        padding-top: 30px;
        padding-bottom: 30px;
    }

</style>
