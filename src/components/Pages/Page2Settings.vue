<template>
    <div class="Page2Settings">
        <form>
            <div class="form-group">
                <label for="formControlRange">General Settings</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="pre_auth" label=" Pre-Auth Security Deposit at Delivery "></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="create_invoice" label="Create Invoice"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="confirm_res" label="How To Confirm Reservation"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="close_res" label="How to Close Reservation"></Toggle>
            </div>
            <div class="form-group">
                <label for="formControlRange">Order Settings</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="avail_cal" label="Show Availability Calendar"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="product_option" label="Show Product Option in Order"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="check_product_avail" label="Check Product Availability"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="order_time_unit" label="Order Time Unit"></Toggle>
            </div>
            <div class="form-group">
                <label for="formControlRange">Offer Reorder</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="reorder.online" label="Online"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="reorder.walk_in" label="Walk In"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="reorder.backend" label="Backend"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="reorder.phone" label="Phone"></Checkbox>
            </div>
            <div class="form-group">
                <label for="formControlRange">Multiple Renters</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="multi_participant.online" label="Online"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="multi_participant.walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="multi_participant.backend" label="Backend"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="multi_participant.phone" label="Phone"></Toggle>
            </div>
        </form>
    </div>
</template>

<script>
    import Checkbox from "./Checkbox.vue"
    import Toggle from "./Toggle.vue"
    export default {
        name: 'Page2Settings',
        components: {
            Checkbox,
            Toggle
        },
        props: {
            index: Number
        },
        data: function() {
            return this.$root.$children[0].pages[1].fields[this.index];
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    Page2Settings {}

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
