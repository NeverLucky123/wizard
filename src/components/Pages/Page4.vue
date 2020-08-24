<template>
    <div class="Page4">
        <ul class="nav nav-tabs">
            <li class="nav-item" v-bind:key="activity.name" v-for="(activity, index) in activity_names">
                <a class="nav-link" v-on:click="set(index)" v-bind:class="{active:tab===index}">{{activity.name}}</a>
            </li>
        </ul>
        <br>
        <Page4Settings v-bind:key="activity.name"  v-for="(activity, index) in activities" v-bind:index="index" v-show="tab===index"></Page4Settings>
    </div>
</template>

<script>
    import Page4Settings from './Page4Settings.vue'
    export default {
        name: 'Page4',
        components: {
            Page4Settings
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
            },
            activity_names: function () {
                return this.$root.$children[0].fields.activity_names
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    Page4 {}

    a {
        color: gray;
        cursor: pointer;
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
