<template>
    <div>
        
        <div v-if="!advanced||active===1||active===5">
            <div class="simple_link" v-bind:class="{active:index<active}" v-if="!last"></div>
        </div>
        <div v-else>
            <div class="advanced_link" v-bind:class="{current:current,active:index<active}" v-if="!last"></div>
            <div class="advanced_link" v-bind:class="{current:current,active:(index+(a+1)*0.1).toPrecision(2)<active.toPrecision(2)}" v-for="(page, a) in page.advanced" v-bind:key="page" v-show="current"></div>
        </div>
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
            current: function(){
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
    .simple_link {
        margin: auto;
        height: 60px;
        width: 6px;
        background-color: #EBEBEB;
    }

    .advanced_link {
        height: 10px;
        margin: auto;
        width: 6px;
        background-color: #EBEBEB;
    }

    .current {
        height: 70px;
    }

    .active {
        background-color: #44B6AE;
    }

</style>
