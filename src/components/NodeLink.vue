<template>
    <div>
        <div>
            <div class="row no-gutters flex-nowrap">
                <span class="col-4 align-self-center">
                    <div class="simple_link" v-bind:class="{active:index<active}" v-if="!last"></div>
                </span>
            </div>
        </div>
        <!---
        <div v-else>
            <div class="row no-gutters flex-nowrap">
                <span class="col-4 align-self-center">
                    <div class="advanced_link" v-bind:class="{current:current,active:index<active}" v-if="!last"></div>
                </span>
            </div>
            <div v-for="(page, a) in page.advanced" v-bind:key="page.name" v-show="current">
                <div class="row no-gutters flex-nowrap">
                    <span class="col-4 align-self-center">
                        <div class="subnode" v-bind:class="{active:(index+a*0.1).toPrecision(2)<active.toPrecision(2)}"></div>
                    </span>
                    <span class="col align-self-center">
                        <a class="node_label" v-bind:class="{active_label:(index+a*0.1).toPrecision(2)<active.toPrecision(2)}" v-on:click="$emit('goto', a+1)">{{page.name}}</a>
                    </span>
                </div>
                <div class="row no-gutters flex-nowrap">
                    <div class="col-4">
                        <div class="advanced_link" v-bind:class="{current:current,active:(index+(a+1)*0.1).toPrecision(2)<active.toPrecision(2)}"></div>
                    </div>
                    <div class="col"></div>

                </div>
            </div>
        </div>
        -->
    </div>
</template>

<script>
    export default {
        name: 'NodeLink',
        components: {},
        computed: {
            advanced: function() {
                return this.$root.$children[0].advanced;
            },
            active: function() {
                return this.$root.$children[0].index;
            },
            last: function() {
                return this.index === this.$root.$children[0].pages.length
            },
            current: function() {
                return this.index.toPrecision(1) == this.active.toPrecision(1);
            }
        },
        props: {
            index: Number,
            page: Object
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        font-size: 12px;
        cursor: pointer;
        color: #9C9C9C;
    }

    .complete_label {
        color: #44B6AE;
        background-color: transparent;
    }

    .active_label {
        color: #44B6AE;
        background-color: transparent;
    }

    .subnode {
        color: #9C9C9C;
        margin: auto;
        line-height: 30px;
        text-align: center;
        height: 25px;
        width: 25px;
        background-color: #EBEBEB;
        border-radius: 50%;
    }

    .simple_link {
        margin: auto;
        height: 60px;
        width: 6px;
        background-color: #EBEBEB;
    }

    .advanced_link {
        height: 25px;
        margin: auto;
        width: 6px;
        background-color: #EBEBEB;
    }

    .current {
        height: 25px;
    }

    .active {
        background-color: #44B6AE;
    }

</style>
