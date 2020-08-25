<template>
    <div class="">
        <form>
            <div>
                <!--
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
                <label>Business Information</label>
                <TextField tooltip="hello" class="input" v-on:update="site_title=$event" type="text" v-bind:value="site_title"
                           label="Site Title"></TextField>
                <TextField class="input" v-on:update="address=$event" type="text" v-bind:value="address"
                           label="Address"></TextField>
                <TextField class="input" v-on:update="tel=$event" type="tel" v-bind:value="tel"
                           label="Phone"></TextField>
                <TextField class="input" v-on:update="site_url=$event" type="url" v-bind:value="site_url"
                           label="Business Website"></TextField>
                <TextField class="input" v-on:update="contact_email=$event" type="email" v-bind:value="contact_email"
                           label="Store Email"></TextField>
                <label>Business Hours</label>
                <TextField class="input" v-on:update="store_open=$event" type="time" v-bind:value="store_open"
                           label="Opening time"></TextField>
                <TextField class="input" v-on:update="store_close=$event" type="time" v-bind:value="store_close"
                           label="Closing time"></TextField>
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
                <div class="row">
                    <Toggle class="input" v-bind:options="calendar_time_intervals" label="Time Interval"></Toggle>
                </div>
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
        data: function () {
            return this.$root.$children[0].fields.business;
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
