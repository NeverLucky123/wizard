<template>
    <div class="">
        <form>
            <div class="form-group">
                <TextField class="input" v-on:update="site_url=$event" type="text" v-bind:value="site_url" label="Site URL"></TextField>
                <TextField class="input" v-on:update="contact_email=$event" type="text" v-bind:value="contact_email" label="Contact Email"></TextField>
                <TextField class="input" v-on:update="tel=$event" type="text" v-bind:value="tel" label="Telephone Number"></TextField>
                <TextField class="input" v-on:update="ZipCode=$event" type="text" v-bind:value="ZipCode" label="Zip Code"></TextField>
                <div class="row">
                    <Toggle class="input" v-bind:options="back_to_client_website" label="back_to_client_website"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="print_setup" label="print_setup"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="show_deposit_items" label="show_deposit_items"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="use_new_invenotry" label="use_new_invenotry"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="can_edit_product_sku" label="can_edit_product_sku"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="show_customer_address_in_orders_list" label="show_customer_address_in_orders_list"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="amendments_history" label="amendments_history"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="show_tab_to_be_started" label="show_tab_to_be_started"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="show_tab_to_be_returned" label="show_tab_to_be_returned"></Toggle>
                </div>
                <div class="row">
                    <Toggle class="input" v-bind:options="link_to_edit_customer" label="link_to_edit_customer"></Toggle>
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
            return this.$root.$children[0].fields.business.other;
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
