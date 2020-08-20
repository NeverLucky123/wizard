<template>
    <div class="page3">
        <ul class="nav nav-tabs">
            <li class="nav-item" v-bind:key="activity.name" v-for="(activity, index) in activities">
                <a class="nav-link" v-on:click="set(index)" v-bind:class="{active:tab===index}">{{activity.name}}</a>
            </li>
        </ul>
        <br>
        <Page3Settings v-bind:key="activity.name"  v-for="(activity, index) in activities" v-bind:index="index" v-show="tab===index"></Page3Settings>
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
                activities: this.$root.$children[0].fields.activity
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
