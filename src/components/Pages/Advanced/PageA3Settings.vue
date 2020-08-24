<template>
    <div class="Page3ASettings">
        <form>
            <div class="form-group">
                <label>General Settings</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="max_order_items_selector" label="Max Items Per Order"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="always_collect_wallet" label=" Display Collect Down Payment "></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="split_borrow_item_rows" label="Split/combine Borrow Items"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="split_purchase_item_rows" label="Split/combine Purchase Items"></Toggle>
            </div>
            <div class="form-group">
                <label>Order Settings</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_taxed_price" label=" Show Prices Including Tax "></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="address_is_required" label="Address Is Required "></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_customer_notes" label=" Accept Customer Notes "></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="show_calculated_period" label=" Show Calculated Period "></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="show_invoice_after_order" label="After Online Orders "></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="show_customer_form_at" label="Display Form (single renter)"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="customer_identification" label="Identification"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="show_catalogue_mode" label="Show Catalogue Mode "></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="walk_in_visibility_like" label="Walk-in Category Visibility Like "></Toggle>
            </div>
        </form>
    </div>
</template>

<script>
    import Checkbox from "../Inputs/Checkbox.vue"
    import Toggle from "../Inputs/Toggle.vue"

    export default {
        name: 'Page3ASettings',
        components: {
            Checkbox,
            Toggle
        },
        props: {
            index: Number
        },
        data: function () {
            return {
                ...this.$root.$children[0].fields.activity[this.index]
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Page3ASettings {
    }

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
