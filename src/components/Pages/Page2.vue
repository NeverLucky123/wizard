<template>
    <div class="page2">
        <form>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="fields.auto_create_invoice" label="Auto-create invoice"></Checkbox>
                <Checkbox v-bind:options="fields.address_required" label="Require Customer address"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="fields.consider_size" label="Customer Choose Equipment Size"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.customer_input" label="Customer Input" ></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.waiver" label="Sign with"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="fields.avail_cal" label="Show availibility calendar"></Checkbox>
                <Checkbox v-bind:options="fields.reorder" label="Offer Reorder"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.multi_participant" label="Each piece of equipment has"></Toggle>
            </div>
        </form>
    </div>
</template>

<script>
    import Checkbox from "./Checkbox.vue"
    import Toggle from "./Toggle.vue"
    export default {
        name: 'Page2',
        components: {
            Checkbox,
            Toggle
        },
        methods: {

        },
        data: function() {
            return this.$root.$children[0].pages[1];
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page2 {}

    h3 {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .form-row {
        margin-bottom: 2em;
    }

</style>
