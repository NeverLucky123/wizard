<template>
    <div>
        <div v-if="!nolabel" class="col-6">
            <label>{{label}}</label>
        </div>
        <Checkbox v-if="input==='Checkbox'" v-bind:options="value"></Checkbox>
        <TextField v-else-if="input==='TextField'" v-bind:value="value" v-bind:type="type"></TextField>
        <Toggle v-else-if="input==='Toggle'" v-bind:options="value"></Toggle>
    </div>
</template>

<script>
    import Checkbox from "./Checkbox";
    import TextField from "./TextField";
    import Toggle from "./Toggle";
    export default {
        name: "Input.vue",
        components: {Checkbox,
        TextField,
        Toggle},
        props: {
            label: String,
            value: String,
            type: String,
            input: String
        },
        computed: {
            nolabel: function() {
                return this.label === undefined
            }
        }
    }
</script>

<style scoped>

</style>