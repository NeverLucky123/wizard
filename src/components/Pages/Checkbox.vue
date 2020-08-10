<template>
    <div class="col-auto">
        <div class="form-check mb-2">
            <input v-on:change="update" class="form-check-input" v-bind:value="options.current" type="checkbox" v-model="current_bool">
            <label class="form-check-label">
                {{label}}
            </label>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Checkbox',
        props: {
            label: String,
            options: Array
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
            }
        }
    }

</script>
