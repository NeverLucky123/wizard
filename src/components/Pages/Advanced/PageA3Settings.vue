<template>
    <div class="Page3ASettings">
        <form>
            <div class="form-group">
                <label>General Settings</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="max_order_state" label="Max Items Per Order"></Toggle>
                <!---
                Custom element to display max_order
                If max_order_items=0, then max_order_items=unlimited
                --->
                <input v-if="max_order_state.current==='limited'"
                       style="width:50px;height:30.4px;margin-bottom:.4em;text-align:right"
                       v-on:change="max_order_items=$event.target.value;$root.$children[0].fields.activity[index].max_order_items=$event.target.value"
                       :value="max_order_items" type="number"
                       class="form-control">
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="always_collect_wallet" label=" Display Collect Down Payment "></Toggle>
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
            <div class="form-row align-items-center">
                <Toggle v-bind:options="time_unit" label="Order Time Unit"></Toggle>
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
            Toggle,
        },
        props: {
            index: Number
        },
        data: function () {
            let state;
            if (this.$root.$children[0].fields.activity[this.index].max_order_items == '0') {
                state = "unlimited"
            } else {
                state = "limited"
            }
            return {
                ...this.$root.$children[0].fields.activity[this.index],
                max_order_state: {
                    options: [
                        {
                            "text": "Unlimited",
                            "value": "unlimited"
                        },
                        {
                            "text": "Limited To",
                            "value": "limited"
                        }
                    ],
                    current: state,
                    label: "Maximum Number Of Items Per Order"
                }
            }
        },
        watch: {
            max_order_state: {
                handler(value) {
                    if (value.current === "unlimited") {
                        this.max_order_items = '0';
                        this.$root.$children[0].fields.activity[this.index].max_order_items='0';
                    }
                    else if(value.current==="limited"){
                        this.max_order_items='1';
                        this.$root.$children[0].fields.activity[this.index].max_order_items='1';
                    }
                },
                deep: true
            }
        }
    }


</script>

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
