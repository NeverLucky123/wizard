<template>
    <div class="">
        <form>
            <div class="form-group">
                <label>Contact</label>
                <TextField class="input" v-on:update="legal_name=$event" type="text" v-bind:value="legal_name" label="Legal Name"></TextField>
                <TextField class="input" v-on:update="site_title=$event" type="text" v-bind:value="site_title" label="Closing time"></TextField>
                <TextField class="input" v-on:update="site_url=$event" type="text" v-bind:value="site_url" label="Site URL"></TextField>
                <TextField class="input" v-on:update="contact_email=$event" type="text" v-bind:value="contact_email" label="Contact Email"></TextField>
                <TextField class="input" v-on:update="tel=$event" type="text" v-bind:value="tel" label="Telephone Number"></TextField>
                <TextField class="input" v-on:update="ZipCode=$event" type="text" v-bind:value="ZipCode" label="Zip Code"></TextField>
                <div class="row">
                    <Toggle class="input" v-bind:options="locale" label=" Locale"></Toggle>
                </div>
                <label>Region</label>
                <div class="row">
                    <Toggle class="input" v-bind:options="currency_name" label="Currency Name"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="currency_symbol" label="Currency Symbol"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="app_view_timezone" label="Time Zone"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="calendar_time_intervals" label="Calendar Time Intervals"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="calendar_time_format" label="Calendar Time Format"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="datetime_format" label="Datetime Format"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="default_country_for_reservation" label="Default Country for Reservation"></Toggle>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import Toggle from '../Inputs/Toggle.vue'
    import TextField from '../Inputs/TextField.vue'
    export default {
        name: 'Page21',
        components: {
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
