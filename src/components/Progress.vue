<template>
    <div class="Progress">
        <ProgressNode v-for="(item, index) in $parent.pages" v-bind:title="item.name" v-bind:index="index+1" v-bind:key="item.name" v-bind:last="index+1===$parent.pages.length" v-bind:active="$parent.index" v-on:goto="$emit('goto', index+1)"></ProgressNode>
    </div>
</template>

<script>
    import ProgressNode from './ProgressNode.vue'
    export default {
        name: 'Progress',
        components: {
            ProgressNode
        },
        data: function() {
            return {
            }
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

</style>
