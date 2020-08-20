<template>
    <div class="page4A">
        <ul class="nav nav-tabs">
            <li class="nav-item" v-bind:key="activity.name" v-for="(activity, index) in activities">
                <a class="nav-link" v-on:click="set(index)" v-bind:class="{active:tab===index}">{{activity.name}}</a>
            </li>
        </ul>
        <br>
        <Page4ASettings v-bind:key="activity.name"  v-for="(activity, index) in activities" v-bind:index="index" v-show="tab===index"></Page4ASettings>
    </div>
</template>

<script>
    import Page4ASettings from './Page4ASettings.vue'
    export default {
        name: 'page4A',
        components: {
            Page4ASettings
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
    page4A {}

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
