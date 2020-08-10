<template>
    <div class="page1">
        <form>
            <div class="form-group">
                <label for="formControlRange">Business hours</label>
                <form>
                    <div class="row">
                        <TimeInput v-on:update="fields.opening=$event" v-bind:time="fields.opening" label="Opening time"></TimeInput>
                         <TimeInput v-on:update="fields.closing=$event" v-bind:time="fields.closing" label="Closing time"></TimeInput>
                    </div>
                    <br>
                </form>
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
 label{
        font-weight: bold;
    }
    .form-row {
        margin-bottom: 2em;
    }

</style>
