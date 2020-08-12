<template>
    <div class="page1">
        <form>
            <div class="form-group">
                <label for="formControlRange">Business hours</label>
                <TimeInput class="timeinput" v-on:update="fields.opening=$event" v-bind:time="fields.opening" label="Opening time"></TimeInput>
                <TimeInput class="timeinput" v-on:update="fields.closing=$event" v-bind:time="fields.closing" label="Closing time"></TimeInput>
            </div>
        </form>
    </div>
</template>

<script>
    import TimeInput from './TimeInput.vue'
    export default {
        name: 'Page1',
        components: {
            TimeInput
        },
        data: function() {
            return this.$root.$children[0].pages[0];
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page1 {}

    label {
        font-weight: bold;
        margin-bottom: 2em;
    }

    .timeinput {
        margin-bottom: 1em;
    }

    .form-row {
        margin-bottom: 2em;
    }

</style>
