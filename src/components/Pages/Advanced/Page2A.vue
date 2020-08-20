<template>
    <div class="">
        <form>
            <div class="form-group">
                <label>Contact</label>
                <TextField class="input" v-on:update="ZipCode=$event" type="text" v-bind:value="ZipCode" label="Zip Code"></TextField>
                <div class="row">
                    <Toggle class="input" v-bind:options="locale" label=" Locale"></Toggle>
                </div>
                <label>Region</label>
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
            <label>Payment Processor</label>
            <div class="form-group">
                <div class="row">
                    <Toggle class="input" v-bind:options="payment_is_enabled" label="Enable Payment Processor"></Toggle>
                </div>
                <div v-if="payment_is_enabled.current==1">
                    <div class="row">
                        <Toggle class="input" v-bind:options="payment_provider" label="Payment Provider"></Toggle>
                    </div>
                    <div v-if="payment_provider.current=='Cardconnect'">
                        <TextField class="input" v-on:update="services_cardconnect_merchantId=$event" type="text" v-bind:value="services_cardconnect_merchantId" label="services_cardconnect_merchantId"></TextField>
                        <TextField class="input" v-on:update="services_cardconnect_apiUsername=$event" type="text" v-bind:value="services_cardconnect_apiUsername" label="services_cardconnect_apiUsername"></TextField>
                        <TextField class="input" v-on:update="services_cardconnect_apiPassword=$event" type="text" v-bind:value="services_cardconnect_apiPassword" label="services_cardconnect_apiPassword"></TextField>
                        <TextField class="input" v-on:update="services_cardconnect_devices=$event" type="text" v-bind:value="services_cardconnect_devices" label="services_cardconnect_devices"></TextField>
                        <TextField class="input" v-on:update="services_cardconnect_default_device=$event" type="text" v-bind:value="services_cardconnect_default_device" label="services_cardconnect_default-device"></TextField>
                    </div>
                    <div v-show="payment_provider.current=='Stripe'">
                        <TextField class="input" v-on:update="services_stripe_public_key=$event" type="text" v-bind:value="services_stripe_public_key" label="services_stripe_public_key"></TextField>
                        <TextField class="input" v-on:update="services_stripe_secret=$event" type="text" v-bind:value="services_stripe_secret" label="services_stripe_secret"></TextField>
                        <TextField class="input" v-on:update="services_stripe_public_testkey=$event" type="text" v-bind:value="services_stripe_public_testkey" label="services_stripe_public_testkey"></TextField>
                        <TextField class="input" v-on:update="services_stripe_testsecret=$event" type="text" v-bind:value="services_stripe_testsecret" label="services_stripe_testsecret"></TextField>
                    </div>
                    <div v-show="payment_provider.current=='AuthorizeNet'">
                        <TextField class="input" v-on:update="AuthorizeNet_clientKey=$event" type="text" v-bind:value="AuthorizeNet_clientKey" label="AuthorizeNet_clientKey"></TextField>
                        <TextField class="input" v-on:update="AuthorizeNet_apiLoginID=$event" type="text" v-bind:value="AuthorizeNet_apiLoginID" label="AuthorizeNet_apiLoginID"></TextField>
                        <TextField class="input" v-on:update="AuthorizeNet_TransactionKey=$event" type="text" v-bind:value="AuthorizeNet_TransactionKey" label="AuthorizeNet_TransactionKey"></TextField>
                    </div>
                    <div v-show="payment_provider.current=='Moneris'">
                        <TextField class="input" v-on:update="Moneris_ht_id=$event" type="text" v-bind:value="Moneris_ht_id" label="Moneris_ht_id"></TextField>
                        <TextField class="input" v-on:update="Moneris_store_id=$event" type="text" v-bind:value="Moneris_store_id" label="Moneris_store_id"></TextField>
                        <TextField class="input" v-on:update="Moneris_api_token=$event" type="text" v-bind:value="Moneris_api_token" label="Moneris_api_token"></TextField>
                    </div>
                    <div v-show="payment_provider.current=='Paragon'">
                        <TextField class="input" v-on:update="Paragon_hp_plus_key=$event" type="text" v-bind:value="Paragon_hp_plus_key" label="Paragon_hp_plus_key"></TextField>
                        <TextField class="input" v-on:update="Paragon_api_username=$event" type="text" v-bind:value="Paragon_api_username" label="Paragon_api_username"></TextField>
                        <TextField class="input" v-on:update="Paragon_api_password=$event" type="text" v-bind:value="Paragon_api_password" label="Paragon_api_password"></TextField>
                        <TextField class="input" v-on:update="Paragon_gateway_id=$event" type="text" v-bind:value="Paragon_gateway_id" label="Paragon_gateway_id"></TextField>
                    </div>
                    <div v-show="payment_provider.current=='Square'">
                        <TextField class="input" v-on:update="services_square_application_id=$event" type="text" v-bind:value="services_square_application_id" label="services_square_application_id"></TextField>
                        <TextField class="input" v-on:update="services_square_access_token=$event" type="text" v-bind:value="services_square_access_token" label="services_square_access_token"></TextField>
                    </div>
                </div>
            </div>
            <label>Paypal</label>
            <div class="row">
                <Toggle class="input" v-bind:options="paypal_is_enabled" label="Enable Paypal Payments"></Toggle>
            </div>
            <div v-if="paypal_is_enabled.current===1">
                <TextField class="input" v-on:update="paypal_live_client_id=$event" type="text" v-bind:value="paypal_live_client_id" label="paypal_live_client_id"></TextField>
                <TextField class="input" v-on:update="paypal_sandbox_client_id=$event" type="text" v-bind:value="paypal_sandbox_client_id" label="paypal_sandbox_client_id"></TextField>
                <TextField class="input" v-on:update="paypal_live_secret=$event" type="text" v-bind:value="paypal_live_secret" label="paypal_live_secret"></TextField>
                <TextField class="input" v-on:update="paypal_sandbox_secret=$event" type="text" v-bind:value="paypal_sandbox_secret" label="paypal_sandbox_secret"></TextField>
            </div>
            <label>Other</label>
            <div class="row">
                <Toggle class="input" v-bind:options="back_to_client_website" label=" After order is placed go to this link "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="print_setup" label=" Print Setup "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="can_edit_product_sku" label=" Edit Product SKU "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="amendments_history" label=" Invoice Amendments Tracking "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="show_tab_to_be_started" label=" Show To Be Started Tab in Order List "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="show_tab_to_be_returned" label="Show To Be Returned Tab in Order List"></Toggle>
            </div>
        </form>
    </div>
</template>

<script>
    import Toggle from '../Inputs/Toggle.vue'
    import TextField from '../Inputs/TextField.vue'
    export default {
        name: 'Page2A',
        components: {
            TextField,
            Toggle
        },
        data: function() {
            return this.$root.$children[0].fields.business;
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
