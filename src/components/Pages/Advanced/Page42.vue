<template>
    <div class="">
        <ul class="nav nav-tabs">
            <li class="nav-item" v-for="(activity, index) in this.activities" v-bind:key=activity.name>
                <a class="nav-link" v-on:click="set(index)" v-bind:class="{active:tab===index}">{{activities[index].name}}</a>
            </li>
        </ul>
        <br>
        <form v-for="(activity, index) in this.activities" v-bind:key=activity.name v-show="tab===index">
            <div v-bind:key="name" v-for="(field, name, index) in activities[index].payment">
                <label v-if="index%4===0">{{labels[index/4]}}</label>
                <div class="form-group">
                    <div class="row">
                        <Toggle class="input" v-bind:options="field" v-bind:label="field.label"></Toggle>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import Toggle from '../Inputs/Toggle.vue'
    export default {
        name: 'Page41',
        components: {
            Toggle
        },
        data: function() {
            return {
                activities: this.$root.$children[0].fields.activity,
                labels: ["Credit Card Action", "Can Skip Credit Card",
                    "Show Borrow Items", "Show Sale Items", "Accept Coupon", "Send Confirmation Email",
                    "Color Theme"
                ]
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
    a {
        cursor: pointer;
        color: gray
    }

    label {
        font-weight: bold;
        margin-bottom: 1em;
    }

</style>
