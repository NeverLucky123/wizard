<template>
    <div class="col">
        <label>{{label}}</label>
        <select  class="selectpicker" data-width="fit" v-model="options.current">
            <option v-bind:key="option" v-for="option in options.options" v-bind:value="option.value">{{option.text}}</option>
        </select>
    </div>
</template>
<script>
    export default {
        name: 'Toggle',
        props: {
            label: String,
            options: Array
        }
    }

</script>
<style scoped>
    select {
        margin-left: 1em;
    }

</style>
