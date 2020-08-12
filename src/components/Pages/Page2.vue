<template>
    <div class="page2">
        <form>
            <div class="form-group">
                <label for="formControlRange">Customer Information</label>
            </div>
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
            </div>
            <div class="form-group">
                <label for="formControlRange">Offer Reorder</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.reorder.online" label="Online"></Toggle>
                <Toggle v-bind:options="fields.reorder.walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.reorder.backend" label="Backend"></Toggle>
                <Toggle v-bind:options="fields.reorder.phone" label="Phone"></Toggle>
            </div>
            <div class="form-group">
                <label for="formControlRange">Multiple Renters</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.multi_participant.online" label="Online"></Toggle>
            </div>
             <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.multi_participant.walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.multi_participant.backend" label="Backend"></Toggle>
            </div>
            <div class="form-row align-items-center">

                <Toggle v-bind:options="fields.multi_participant.phone" label="Phone"></Toggle>
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
     label{
        font-weight: bold;
    }
    h3 {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .form-row {
        margin-bottom: 2em;
    }

</style>
