<template>
    <div class="">
        <form>
            <div class="form-group">
                <label>Regional Settings</label>
                <div class="row">
                    <Toggle class="input" v-bind:options="currency_name" label="Currency Name"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="currency_symbol" label="Currency Symbol"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="app_view_timezone" label="Timezone"></Toggle>
                </div>
                <!--
                <label>Business Hours</label>
                <TextField class="input" v-on:update="opening=$event" type="time" v-bind:value="opening" label="Opening time"></TextField>
                <TextField class="input" v-on:update="closing=$event" type="time" v-bind:value="closing" label="Closing time"></TextField>
                <label>Business Open On</label>
                <div class="row flex-nowrap">
                    <div class="days col">Sun</div>
                    <div class="days col">Mon</div>
                    <div class="days col">Tues</div>
                    <div class="days col">Wed</div>
                    <div class="days col">Thur</div>
                    <div class="days col">Fri</div>
                    <div class="days col">Sat</div>
                </div>
                <div class="row flex-nowrap">
                    <CheckBox v-for="(day, index) in days" v-bind:key="index" v-bind:options="day"></CheckBox>
                </div>
                -->
                <br>
                <label for="formControlRange">Site Url</label>
                <TextField class="input" v-on:update="site_url=$event" type="url" v-bind:value="site_url"></TextField>
            </div>
        </form>
    </div>
</template>

<script>
    //import CheckBox from './Inputs/Checkbox.vue'
    import Toggle from './Inputs/Toggle.vue'
    import TextField from './Inputs/TextField.vue'
    export default {
        name: 'Page2',
        components: {
            //CheckBox,
            TextField,
            Toggle
        },
        data: function() {
            return this.$root.$children[0].fields.business.information;
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .days {
        text-align: center;
    }

    label {
        font-weight: bold;
        margin-bottom: 1em;
    }

    .input {
        margin-bottom: 1em;
    }

    .form-row {
        margin-bottom: 2em;
    }

</style>
