<template>
    <div class="Page3Settings">
        <form>
            <div class="form-group">
                <label>General Settings</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="preauth_security_deposit_at_delivery" label=" Pre-Auth Security Deposit at Delivery "></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="invoice_time" label="Create Invoice"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="reservation_confirmation" label="How To Confirm Reservation"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="close_order" label="How to Close Order"></Toggle>
            </div>
            <div class="form-group">
                <label>Order Settings</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_availability_calendar_when_place_order" label="Show Availability Calendar"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_size" label="Show Product Option in Order"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="check_availability" label="Check Product Availability"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="check_availability" label="Order Time Unit"></Toggle>
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
