<template>
    <div>
        <div>
            <div class="row no-gutters flex-nowrap">
                <span class="col-4 align-self-center">
                    <div class="simple_link" v-bind:class="{active:index<active}" v-if="!last"></div>
                </span>
            </div>
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

<style scoped>
    .simple_link {
        margin: auto;
        height: 60px;
        width: 6px;
        background-color: #EBEBEB;
    }

    .active {
        background-color: #44B6AE;
    }

</style>
