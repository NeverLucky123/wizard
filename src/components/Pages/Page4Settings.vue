<template>
    <div class="Page4Settings">
        <form>
            <div class="form-group">
                <label>Offer Reorder</label>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="offer_reorder_web" label="Online"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="offer_reorder_walk_in" label="Walk In"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="offer_reorder_back_end" label="Backend"></Checkbox>
            </div>
            <div class="form-row align-items-center">
                <Checkbox v-bind:options="offer_reorder_phone" label="Phone"></Checkbox>
            </div>
            <div class="form-group">
                <label>Multiple Renters</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="multiple_rentersweb" label="Online"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="multiple_renterswalk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="multiple_rentersback_end" label="Backend"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="multiple_rentersphone" label="Phone"></Toggle>
            </div>
        </form>
    </div>
</template>
<script>
    import Checkbox from "./Inputs/Checkbox";
    import Toggle from "./Inputs/Toggle.vue"
    export default {
        name: 'Page4Settings',
        components: {
            Toggle,
            Checkbox
        },
        props: {
            index: Number
        },
        data: function() {
            return this.$root.$children[0].fields.activity[this.index];
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    Page4Settings {
    }
    label{
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
