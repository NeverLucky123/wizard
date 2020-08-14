<template>
    <div class="Page4">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" v-on:click="set(0)" v-bind:class="{active:tab===0}">{{activities.fields[0].activity_name}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" v-on:click="set(1)" v-bind:class="{active:tab===1}">{{activities.fields[1].activity_name}}</a>
            </li>
        </ul>
        <br>
        <Page4Settings v-bind:index='0' v-show="tab===0"></Page4Settings>
        <Page4Settings v-bind:index='1' v-show="tab===1"></Page4Settings>
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
                activities: this.$root.$children[0].pages[3]
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
