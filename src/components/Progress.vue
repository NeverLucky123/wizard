<template>
    <div class="Progress">
        <div class="container" style="height:100%">
            <div class="row align-items-center" style="height:100%">
                <div class="col">
                    <ProgressNode v-for="(item, index) in $parent.pages" v-bind:title="item.name" v-bind:index="index+1" v-bind:page="item" v-bind:key="item.name" v-bind:last="index+1===$parent.pages.length" v-on:goto="$emit('goto', index+1)">
                    </ProgressNode>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProgressNode from './ProgressNode.vue'
    export default {
        name: 'Progress',
        components: {
            ProgressNode
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Progress {
        color: #9C9C9C;
        background-color: #FFFFFF;
        height: 100%;
    }

    .no-gutters {
        padding-right: 0 !important;
        padding-left: 0 ! important;
    }

</style>
