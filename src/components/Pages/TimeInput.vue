<template>
    <div class="row align-items-center">
        <div class="col-6">
            <label>{{label}}</label>
        </div>
        <div class="col-6">
            <input v-on:change="$emit('update',$event.target.value)" :value="time" type="time" class="form-control">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TimeInput',
        props: {
            label: String,
            time: String
        }
    }

</script>
<style scoped>
    input {}

    label {
        margin: 0 !important;
    }

</style>
