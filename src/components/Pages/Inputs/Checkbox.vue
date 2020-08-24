<template>
    <div class="col">
            <label v-on:click="invert" class="form-check-label">
                {{label}}
            </label>
            <label v-if="warning">warning warning warning warning warning warning</label>
            <input v-on:change="update" class="form-check-input" v-bind:value="options.current" type="checkbox" v-model="current_bool">
    </div>
</template>
<script>
    export default {
        name: 'Checkbox',
        props: {
            label: String,
            options: Object
        },
        data: function() {
            if (this.options.current === this.options.options[1].value) {
                return {
                    current_bool: true
                }
            } else {
                return {
                    current_bool: false
                }
            }
        },
        methods: {
            update: function() {
                if (this.current_bool === true) {
                    this.options.current = this.options.options[1].value
                } else {
                    this.options.current = this.options.options[0].value
                }
            },

            invert: function() {
                if (this.current_bool === true) {
                    this.current_bool = false
                } else if (this.current_bool === false) {
                    this.current_bool = true
                }
                this.update()
            }
        },
        computed: {
            nolabel: function(){
                return this.label===undefined
            },
            warning: function(){
                return this.options.options.length>2
            }
        }
    }

</script>
<style scoped>
    input {
        width: 40%;
        cursor: pointer;
    }
    label{
        width:60%;
        cursor: pointer;
    }
    .no-gutters {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

</style>
