<template>
    <div class="page">
        <div>
            <br>
            <Page1 v-if="!$parent.advanced&&$parent.index===1"></Page1>
            <PageA1 v-if="$parent.advanced&&$parent.index===1"></PageA1>
            <Page2 v-if="!$parent.advanced&&$parent.index===2"></Page2>
            <PageA2 v-if="$parent.advanced&&$parent.index===2"></PageA2>
            <Page3 v-if="!$parent.advanced&&$parent.index===3"></Page3>
            <PageA3 v-if="$parent.advanced&&$parent.index===3"></PageA3>
            <Page4 v-if="!$parent.advanced&&$parent.index===4"></Page4>
            <PageA4 v-if="$parent.advanced&&$parent.index===4"></PageA4>
            <Page5 v-if="$parent.index===5"></Page5>
        </div>
        <br>
        <div v-if="$parent.index<5">
            <button v-show="!$parent.advanced" class="btn pulltab advanced_pulltab" v-on:click="toggle">
                <font-awesome-icon icon="chevron-circle-up"></font-awesome-icon> Advanced
            </button>
            <button v-show="$parent.advanced" class="btn pulltab simple_pulltab" v-on:click="toggle">
                <font-awesome-icon icon="chevron-circle-down"></font-awesome-icon> Simple
            </button>
        </div>
    </div>
</template>

<script>
    import Page1 from './Pages/Page1.vue'
    import Page2 from './Pages/Page2.vue'
    import Page3 from './Pages/Page3.vue'
    import Page4 from './Pages/Page4.vue'
    import Page5 from './Pages/Page5.vue'

    import PageA1 from './Pages/Advanced/PageA1.vue'
    import PageA2 from './Pages/Advanced/PageA2.vue'
    import PageA3 from './Pages/Advanced/PageA3.vue'
    import PageA4 from './Pages/Advanced/PageA4.vue'
    export default {
        name: 'Page',
        components: {
            Page1,
            Page2,
            Page3,
            Page4,
            Page5,
            PageA1,
            PageA2,
            PageA3,
            PageA4
        },
        computed: {
            title: function() {
                if (this.$parent.index === 1) {
                    return "Welcome to the Rentrax Setup Wizard"
                } else {
                    return this.$parent.pages[this.$parent.index - 1].name
                }
            }
        },
        methods: {
            toggle: function() {
                this.$parent.advanced = !this.$parent.advanced;
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        height: 100%;
    }

    .pulltab {
        line-height: 7%;
        position: absolute;
        height: 7%;
        width: 25%;
        z-index: 1;
        color: white;
        font-size: 16px;
        background-color: #1bb1b1;
        left: 40%;

    }

    .advanced_pulltab {
        top: 93%;
    }

    .simple_pulltab {
        top: 93%;
    }

    .pulltab:active,
    .pulltab:hover,
    .pulltab:visited {
        color: white !important;
        background-color: #00CCCC !important;
    }
    .no-gutters {
        padding: 0 !important;
    }
    .title {
        padding-top: 30px;
        padding-bottom: 30px;
    }

</style>
