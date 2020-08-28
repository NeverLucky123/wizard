<template>
    <div class="row align-items-center">
        <div v-if="!nolabel" class="col no-gutters col-6">
            <label v-tooltip="tooltip">{{label}}</label>
        </div>
        <div class="text col no-gutters"> <input v-on:change="$emit('update',$event.target.value)" :value="value" v-bind:type="type" class="form-control">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TextField',
        props: {
            label: String,
            value: String,
            type: String,
            tooltip: String
        },
        computed: {
            nolabel: function() {
                return this.label === undefined
            }
        }
    }

</script>
<style scoped>
    .text {margin-right: 15px;}

    label {
        padding-left: 15px;
    }


</style>
