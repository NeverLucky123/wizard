<template>
    <div class="progress-node">
        <div>
            <div class="row no-gutters">
                <span class="col-4 align-self-center">
                    <div class="node" v-bind:class="{active:index==active, complete:index<active}" v-on:click="$emit('goto', index)">{{index}}</div>
                </span>
                <span class="col align-self-center">
                    <a class="node_label" v-bind:class="{active_label:active==index, complete_label:index<active}" v-on:click="$emit('goto', index)">{{title}}</a>
                </span>
            </div>
            <div class="row no-gutters">
                <div class="col-4">
                    <div class="node_link" v-if="!last"></div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Page',
        components: {},
        methods: {

        },
        props: {
            title: String,
            active: Number,
            last: Boolean,
            index: Number
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .node_label {
        text-align: center;
        cursor: pointer;
    }

    a {
        color: #9C9C9C;
    }

    .node {
        color: #9C9C9C;
        margin: auto;
        line-height: 50px;
        text-align: center;
        height: 50px;
        width: 50px;
        background-color: #EBEBEB;
        border-radius: 50%;
    }


    .complete {
        color: white;
        background-color: #44B6AE;
    }

    .complete_label {
        color: #44B6AE;
        background-color: transparent;
    }

    .active {
        line-height: 42px;
        border-width: 4px;
        border-style: inset;
        color: #44B6AE;
        border-color: #44B6AE;
    }

    .active_label {
        color: #44B6AE;
        background-color: transparent;
    }

    .node_link {
        margin: auto;
        height: 40px;
        width: 3px;
        background-color: #EBEBEB;
    }

</style>
