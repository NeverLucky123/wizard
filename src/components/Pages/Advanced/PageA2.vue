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
                <div v-if="payment_is_enabled.current==='1'">
                    <div class="row">
                        <Toggle class="input" v-bind:options="payment_provider" label="Payment Provider"></Toggle>
                    </div>
                    <div v-if="payment_provider.current==='Cardconnect'">
                        <TextField class="input" v-on:update="services_cardconnect_merchantId=$event" type="text" v-bind:value="services_cardconnect_merchantId" label="Cardconnect MerchantId"></TextField>
                        <TextField class="input" v-on:update="services_cardconnect_apiUsername=$event" type="text" v-bind:value="services_cardconnect_apiUsername" label="Cardconnect API Username"></TextField>
                        <TextField class="input" v-on:update="services_cardconnect_apiPassword=$event" type="text" v-bind:value="services_cardconnect_apiPassword" label="Cardconnect API Password"></TextField>
                        <TextField class="input" v-on:update="services_cardconnect_devices=$event" type="text" v-bind:value="services_cardconnect_devices" label="Cardconnect BOLT Devices"></TextField>
                        <TextField class="input" v-on:update="services_cardconnect_default_device=$event" type="text" v-bind:value="services_cardconnect_default_device" label="Cardconnect Default Device"></TextField>
                    </div>
                    <div v-if="payment_provider.current==='Stripe'">
                        <TextField class="input" v-on:update="services_stripe_public_key=$event" type="text" v-bind:value="services_stripe_public_key" label="Stripe Public Test Key"></TextField>
                        <TextField class="input" v-on:update="services_stripe_secret=$event" type="text" v-bind:value="services_stripe_secret" label="Stripe Secret Test Key"></TextField>
                        <TextField class="input" v-on:update="services_stripe_public_testkey=$event" type="text" v-bind:value="services_stripe_public_testkey" label="Stripe Public Key"></TextField>
                        <TextField class="input" v-on:update="services_stripe_testsecret=$event" type="text" v-bind:value="services_stripe_testsecret" label="Stripe Secret Key"></TextField>
                    </div>
                    <div v-if="payment_provider.current==='AuthorizeNet'">
                        <TextField class="input" v-on:update="AuthorizeNet_clientKey=$event" type="text" v-bind:value="AuthorizeNet_clientKey" label="AuthorizeNet ClientKey"></TextField>
                        <TextField class="input" v-on:update="AuthorizeNet_apiLoginID=$event" type="text" v-bind:value="AuthorizeNet_apiLoginID" label="AuthorizeNet APILoginID"></TextField>
                        <TextField class="input" v-on:update="AuthorizeNet_TransactionKey=$event" type="text" v-bind:value="AuthorizeNet_TransactionKey" label="AuthorizeNet TransactionKey"></TextField>
                    </div>
                    <div v-if="payment_provider.current==='Moneris'">
                        <TextField class="input" v-on:update="Moneris_ht_id=$event" type="text" v-bind:value="Moneris_ht_id" label="Moneris HT ID"></TextField>
                        <TextField class="input" v-on:update="Moneris_store_id=$event" type="text" v-bind:value="Moneris_store_id" label="Moneris Store ID"></TextField>
                        <TextField class="input" v-on:update="Moneris_api_token=$event" type="text" v-bind:value="Moneris_api_token" label="Moneris API Token"></TextField>
                    </div>
                    <div v-if="payment_provider.current==='Paragon'">
                        <TextField class="input" v-on:update="Paragon_hp_plus_key=$event" type="text" v-bind:value="Paragon_hp_plus_key" label="Paragon HP Plus Key"></TextField>
                        <TextField class="input" v-on:update="Paragon_api_username=$event" type="text" v-bind:value="Paragon_api_username" label="Paragon API Username"></TextField>
                        <TextField class="input" v-on:update="Paragon_api_password=$event" type="text" v-bind:value="Paragon_api_password" label="Paragon API Password"></TextField>
                        <TextField class="input" v-on:update="Paragon_gateway_id=$event" type="text" v-bind:value="Paragon_gateway_id" label="Paragon Gateway ID"></TextField>
                    </div>
                    <div v-if="payment_provider.current==='Square'">
                        <TextField class="input" v-on:update="services_square_application_id=$event" type="text" v-bind:value="services_square_application_id" label="Square Application Id"></TextField>
                        <TextField class="input" v-on:update="services_square_access_token=$event" type="text" v-bind:value="services_square_access_token" label="Square Access Token"></TextField>
                    </div>
                </div>
            </div>
            <label>Paypal</label>
            <div class="row">
                <Toggle class="input" v-bind:options="paypal_is_enabled" label="Enable Paypal Payments"></Toggle>
            </div>
            <div v-if="paypal_is_enabled.current==='1'">
                <TextField class="input" v-on:update="paypal_live_client_id=$event" type="text" v-bind:value="paypal_live_client_id" label="Paypal Live Client id"></TextField>
                <TextField class="input" v-on:update="paypal_sandbox_client_id=$event" type="text" v-bind:value="paypal_sandbox_client_id" label="Paypal Sandbox Client id"></TextField>
                <TextField class="input" v-on:update="paypal_live_secret=$event" type="text" v-bind:value="paypal_live_secret" label="Paypal Live Secret"></TextField>
                <TextField class="input" v-on:update="paypal_sandbox_secret=$event" type="text" v-bind:value="paypal_sandbox_secret" label="Paypal Sandbox Secret"></TextField>
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
