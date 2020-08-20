<template>
    <div class="Page3Settings">
        <form>
            <div class="form-group">
                <label>General Settings</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="general.preauth_security_deposit_at_delivery" label=" Pre-Auth Security Deposit at Delivery "></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="general.invoice_time" label="Create Invoice"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="general.reservation_confirmation" label="How To Confirm Reservation"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="general.close_order" label="How to Close Order"></Toggle>
            </div>
            <div class="form-group">
                <label>Order Settings</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="customer.show_availability_calendar_when_place_order" label="Show Availability Calendar"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="customer.show_size" label="Show Product Option in Order"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="customer.check_availability" label="Check Product Availability"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="customer.check_availability" label="Order Time Unit"></Toggle>
            </div>
            <div class="form-group">
                <label>Offer Reorder</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="order.offer_reorder_web" label="Online"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="order.offer_reorder_walk_in" label="Walk In"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="order.offer_reorder_back_end" label="Backend"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="order.offer_reorder_phone" label="Phone"></Checkbox>
            </div>
            <div class="form-group">
                <label>Multiple Renters</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="order.multiple_rentersweb" label="Online"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="order.multiple_renterswalk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="order.multiple_rentersback_end" label="Backend"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="order.multiple_rentersphone" label="Phone"></Toggle>
            </div>
        </form>
    </div>
</template>

<script>
    import Checkbox from "./Inputs/Checkbox.vue"
    import Toggle from "./Inputs/Toggle.vue"
    export default {
        name: 'Page3Settings',
        components: {
            Checkbox,
            Toggle
        },
        props: {
            index: Number
        },
        data: function() {
            return {
                ...this.$root.$children[0].fields.activity[this.index]
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    Page3Settings {}

    label {
        font-weight: bold;
    }

    h3 {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .form-row {
        margin-bottom: 1em;
    }

</style>
