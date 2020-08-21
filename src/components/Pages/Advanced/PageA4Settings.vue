<template>
    <div class="Page#ASettings">
        <form>
            <div class="form-group">
                <label>Accept Orders In</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="accept_order_web" label="Web"></Checkbox>
                <Checkbox v-bind:options="accept_order_walk_in" label="Walk In"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="accept_order_back_end" label="Back-End"></Checkbox>
                <Checkbox v-bind:options="accept_order_phone" label="Phone"></Checkbox>
            </div>
            <div class="form-group">
                <label>Renter's Attributes</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="renters_attribute_web" label="Web"></Toggle>
                <Toggle v-bind:options="renters_attribute_walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="renters_attribute_back_end" label="Back-End"></Toggle>
                <Toggle v-bind:options="renters_attribute_phone" label="Phone"></Toggle>
            </div>
            <div class="form-group">
                <label>Rental Period Options</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="period_options_web" label="Web"></Toggle>
                <Toggle v-bind:options="period_options_walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="period_options_back_end" label="Back-End"></Toggle>
                <Toggle v-bind:options="period_options_phone" label="Phone"></Toggle>
            </div>
            <div class="form-group">
                <label>Show Product Info</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_product_info_web" label="Web"></Checkbox>
                <Checkbox v-bind:options="show_product_info_walk_in" label="Walk In"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_product_info_back_end" label="Back-End"></Checkbox>
                <Checkbox v-bind:options="show_product_info_phone" label="Phone"></Checkbox>
            </div>
            <div class="form-group">
                <label>Credit Card Action</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="cc_action_web" label="Web"></Toggle>
                <Toggle v-bind:options="cc_action_walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="cc_action_back_end" label="Back-End"></Toggle>
                <Toggle v-bind:options="cc_action_phone" label="Phone"></Toggle>
            </div>
            <div class="form-group">
                <label>Can Skip Credit Card</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="can_skip_cc_web" label="Web"></Toggle>
                <Toggle v-bind:options="can_skip_cc_walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="can_skip_cc_back_end" label="Back-End"></Toggle>
                <Toggle v-bind:options="can_skip_cc_phone" label="Phone"></Toggle>
            </div>
            <div class="form-group">
                <label>Show Borrow Items</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_borrow_items_web" label="Web"></Checkbox>
                <Checkbox v-bind:options="show_borrow_items_walk_in" label="Walk In"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_borrow_items_back_end" label="Back-End"></Checkbox>
                <Checkbox v-bind:options="show_borrow_items_phone" label="Phone"></Checkbox>
            </div>
            <div class="form-group">
                <label>Show Sale Items</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_sale_items_web" label="Web"></Checkbox>
                <Checkbox v-bind:options="show_sale_items_walk_in" label="Walk In"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_sale_items_back_end" label="Back-End"></Checkbox>
                <Checkbox v-bind:options="show_sale_items_phone" label="Phone"></Checkbox>
            </div>
            <div class="form-group">
                <label>Accept Coupon</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="accept_coupon_web" label="Web"></Checkbox>
                <Checkbox v-bind:options="accept_coupon_walk_in" label="Walk In"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="accept_coupon_back_end" label="Back-End"></Checkbox>
                <Checkbox v-bind:options="accept_coupon_phone" label="Phone"></Checkbox>
            </div>
            <div class="form-group">
                <label>Send Confirmation Email</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="auto_send_email_web" label="Web"></Checkbox>
                <Checkbox v-bind:options="auto_send_email_walk_in" label="Walk In"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="auto_send_email_back_end" label="Back-End"></Checkbox>
                <Checkbox v-bind:options="auto_send_email_phone" label="Phone"></Checkbox>
            </div>
        </form>
    </div>
</template>

<script>
    import Checkbox from "../Inputs/Checkbox.vue"
    import Toggle from "../Inputs/Toggle.vue"

    export default {
        name: 'Page#ASettings',
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
    .Page#ASettings {}

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
