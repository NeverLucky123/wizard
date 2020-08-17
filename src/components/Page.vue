<template>
    <div class="page">
        <div class="container title">
            <div class="row align-items-center">
                <div class="col-auto no-gutters">
                    <font-awesome-icon class="icon" size="lg" v-bind:icon="icon">
                    </font-awesome-icon>
                </div>
                <div class="col no-gutters">
                    <h4>{{title}}</h4>
                </div>
            </div>
        </div>
        <Page1 v-show="$parent.index===1"></Page1>
        <Page2 v-if="!$parent.advanced" v-show="$parent.index===2"></Page2>
        <Page21 v-if="$parent.advanced" v-show="$parent.index.toPrecision(2)==2.1"></Page21>
        <Page22 v-if="$parent.advanced" v-show="$parent.index.toPrecision(2)==2.2"></Page22>
        <Page23 v-if="$parent.advanced" v-show="$parent.index.toPrecision(2)==2.3"></Page23>
        <Page3 v-if="!$parent.advanced" v-show="$parent.index===3"></Page3>
        <Page31 v-if="$parent.advanced" v-show="$parent.index.toPrecision(2)==3.1"></Page31>
        <Page32 v-if="$parent.advanced" v-show="$parent.index.toPrecision(2)==3.2"></Page32>
        <Page4 v-if="!$parent.advanced" v-show="$parent.index===4"></Page4>
        <Page41 v-if="$parent.advanced" v-show="$parent.index.toPrecision(2)==4.1"></Page41>
        <Page42 v-if="$parent.advanced" v-show="$parent.index.toPrecision(2)==4.2"></Page42>
        <Page43 v-if="$parent.advanced" v-show="$parent.index.toPrecision(2)==4.3"></Page43>
        <Page5 v-show="$parent.index===5"></Page5>
    </div>
</template>

<script>
    import Page1 from './Pages/Page1.vue'
    import Page2 from './Pages/Page2.vue'
    import Page3 from './Pages/Page3.vue'
    import Page4 from './Pages/Page4.vue'
    import Page5 from './Pages/Page5.vue'

    import Page21 from './Pages/Advanced/Page21.vue'
    import Page22 from './Pages/Advanced/Page22.vue'
    import Page23 from './Pages/Advanced/Page23.vue'
    import Page31 from './Pages/Advanced/Page31.vue'
    import Page32 from './Pages/Advanced/Page32.vue'
    import Page41 from './Pages/Advanced/Page41.vue'
    import Page42 from './Pages/Advanced/Page42.vue'
    import Page43 from './Pages/Advanced/Page43.vue'

    export default {
        name: 'Page',
        components: {
            Page1,
            Page2,
            Page3,
            Page4,
            Page5,
            Page21,
            Page22,
            Page23,
            Page31,
            Page32,
            Page41,
            Page42,
            Page43
        },
        computed: {
            title: function() {
                if (this.$parent.index == 1) {
                    return "Welcome to the Rentrax Setup Wizard"
                } else if (this.$parent.advanced && (this.$parent.index != 5 && this.$parent.index != 1)) {
                    var mainnode = parseInt(this.$parent.index)
                    var decimal = this.$parent.index - mainnode
                    return this.$parent.pages[mainnode - 1].name + " - " + this.$parent.pages[mainnode - 1].advanced[Math.round((decimal - 0.1) * 10)].name
                } else {
                    return this.$parent.pages[this.$parent.index - 1].name
                }
            },
            console: () => console,
            icon: function() {
                if (this.$parent.advanced && (this.$parent.index != 5 && this.$parent.index != 1)) {
                    var mainnode = parseInt(this.$parent.index)
                    var decimal = this.$parent.index - mainnode
                    return this.$parent.pages[mainnode - 1].advanced[Math.round((decimal - 0.1) * 10)].icon
                } else {
                    return this.$parent.pages[this.$parent.index - 1].icon
                }
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        height: 100%;
        padding-right: 20px !important;
        padding-left: 10px !important;
    }

    .icon {
        color: #44B6AE;
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
