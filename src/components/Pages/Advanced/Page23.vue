<template>
    <div class="">
        <form>
            <br>
            <div class="row">
                <Toggle class="input" v-bind:options="back_to_client_website" label=" After order is placed go to this link "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="print_setup" label=" Print Setup "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="show_deposit_items" label=" Show deposit items in custody "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="use_new_invenotry" label=" Switch to new inventory system "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="can_edit_product_sku" label=" Edit Product SKU "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="show_customer_address_in_orders_list" label="Customer Address in Order List"></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="amendments_history" label=" Invoice Amendments Tracking "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="show_tab_to_be_started" label=" Show To Be Started Tab in Order List "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="show_tab_to_be_returned" label=" Show To Be Returned Tab in Order List "></Toggle>
            </div>
            <div class="row">
                <Toggle class="input" v-bind:options="link_to_edit_customer" label=" When Click on Customer Link Go to "></Toggle>
            </div>

        </form>
    </div>
</template>

<script>
    import Toggle from '../Inputs/Toggle.vue'
    export default {
        name: 'Page23',
        components: {
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
