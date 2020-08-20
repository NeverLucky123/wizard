<template>
    <div class="Page4Settings">
        <form>
            <div class="form-group">
                <label>Credit Card Action</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="cc_action_web" label="Online"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="cc_action_walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="cc_action_back_end" label="Backend"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="cc_action_phone" label="Phone"></Toggle>
            </div>
            <br>
            <div class="form-group">
                <label>Can Skip Credit Card</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="can_skip_cc_web" label="Online"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="can_skip_cc_walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
            <Toggle v-bind:options="can_skip_cc_back_end" label="Backend"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="can_skip_cc_phone" style="margin-bottom:0" label="Phone"></Toggle>
            </div>
        </form>
    </div>
</template>
<script>
    import Toggle from "./Inputs/Toggle.vue"
    export default {
        name: 'Page4Settings',
        components: {
            Toggle
        },
        props: {
            index: Number
        },
        data: function() {
            return this.$root.$children[0].fields.activity[this.index].payment;
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
