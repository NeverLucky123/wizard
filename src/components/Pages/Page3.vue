<template>
    <div class="page3">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" v-on:click="set(0)" v-bind:class="{active:tab===0}">{{activities.fields[0].activity_name}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" v-on:click="set(1)" v-bind:class="{active:tab===1}">{{activities.fields[1].activity_name}}</a>
            </li>
        </ul>
        <br>
        <Page3Settings v-bind:index='0' v-show="tab===0"></Page3Settings>
        <Page3Settings v-bind:index='1' v-show="tab===1"></Page3Settings>
    </div>
</template>

<script>
    import Page3Settings from './Page3Settings.vue'
    export default {
        name: 'Page3',
        components: {
            Page3Settings
        },
        data: function() {
            return {
                activities: this.$root.$children[0].pages[2]
            }
        },
        methods: {
            set(i) {
                this.$root.$children[0].tab = i
            }
        },
        computed: {
            tab: function() {
                return this.$root.$children[0].tab
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page3 {}

    a {
        cursor: pointer;
        color: gray
    }

    a:hover {
        color: gray
    }

    label {
        font-weight: bold;
    }

    h3 {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .form-row {
        margin-bottom: 1em;
    }

</style>
