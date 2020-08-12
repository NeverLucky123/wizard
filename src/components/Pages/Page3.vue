<template>
    <div class="page3">
        <form>
            <div class="form-group">
                <label for="formControlRange">Credit Card Action</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.credit_card.online" label="Online"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.credit_card.walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.credit_card.backend" label="Backend"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.credit_card.phone" label="Phone"></Toggle>
            </div>
            <br>
            <div class="form-group">
                <label for="formControlRange">Can Skip Credit Card</label>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.delay_payment.walk_in" label="Walk In"></Toggle>
            </div>
            <div class="form-row align-items-center">
                <Toggle v-bind:options="fields.delay_payment.backend" style="margin-bottom:0" label="Backend"></Toggle>
            </div>
        </form>
    </div>
</template>

<script>
    import Toggle from "./Toggle.vue"
    export default {
        name: 'Page3',
        components: {
            Toggle
        },
        methods: {

        },
        data: function() {
            return this.$root.$children[0].pages[2];
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page3 {}
    label{
        font-weight: bold;
    }
    h3 {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .form-row {
        margin-bottom: 1.5em;
    }

</style>
