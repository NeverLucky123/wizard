<template>
    <div class="col">
        <label>{{label}}</label>
        <select class="selectpicker"  v-model="options.current">
            <option v-bind:key="option.text" v-for="option in options.options" v-bind:value="option.value">{{option.text}}</option>
        </select>
    </div>
</template>
<script>
    export default {
        name: 'Toggle',
        props: {
            label: String,
            options: Object
        }
    }

</script>
<style scoped>
    select {
        width: 50% !important;
    }
    label{
        width: 50%;
    }

</style>
