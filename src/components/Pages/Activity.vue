<template>
    <div class="activity">
        <form>
            <div class="form-group">
                <label for="formControlRange">Customer Information</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="auto_create_invoice" label="Auto-create invoice"></Checkbox>
            </div>

            <div class="form-row align-items-center">
                <Checkbox v-bind:options="consider_size" label="Customer Choose Equipment Size"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="address_required" label="Require Customer address"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="avail_cal" label="Show availibility calendar"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="customer_input" label="Customer Input"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="waiver" label="Sign with"></Toggle>
            </div>
            <div class="form-group">
                <label for="formControlRange">Offer Reorder</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="reorder.online" label="Online"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="reorder.walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="reorder.backend" label="Backend"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="reorder.phone" label="Phone"></Toggle>
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
        name: 'activity',
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
    activity {}

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
