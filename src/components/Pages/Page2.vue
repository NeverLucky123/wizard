<template>
    <div class="page2">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" v-on:click="tab=0" v-bind:class="{active:tab===0}">{{activities.fields[0].activity_name}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" v-on:click="tab=1" v-bind:class="{active:tab===1}">{{activities.fields[1].activity_name}}</a>
            </li>
        </ul>
        <br>
        <Activity v-bind:index='0' v-show="tab===0"></Activity>
        <Activity v-bind:index='1' v-show="tab===1"></Activity>

    </div>
</template>

<script>
    import Activity from './Activity.vue'
    export default {
        name: 'Page2',
        components: {
            Activity
        },
        data: function() {
            return {
                activities: this.$root.$children[0].pages[1],
                tab: 0
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page2 {}

    a {
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
