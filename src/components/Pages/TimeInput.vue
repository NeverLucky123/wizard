<template>
    <div class="col">
        <input v-on:change="$emit('update',$event.target.value)" :value="time" type="time" class="form-control">
        <small id="passwordHelpBlock" class="form-text text-muted">
            {{label}}
        </small>

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
    select {
        margin-left: 1em;
    }

</style>
