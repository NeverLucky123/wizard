<template>
    <div class="page">
        <div class="container title">
            <div class="row align-items-center">
                <div class="col-auto no-gutters">
                    <font-awesome-icon size="lg" v-bind:icon="icon">
                    </font-awesome-icon>
                </div>
                <div class="col no-gutters">
                    <h4>{{title}}</h4>
                </div>
            </div>
        </div>
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
            },
            icon: function() {
                return this.$parent.pages[this.$parent.index - 1].icon
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        height: 100%;
        padding: 20px;
    }

    .no-gutters {
        padding: 0 !important;
    }


    h4 {
        margin-left: 10px;
        margin-bottom: 0;
        color: #44B6AE;

    }

    .title {
        padding-top: 30px;
        padding-bottom: 30px;
    }

</style>
