<template>
    <div class="Page1">
        <div class="row">
            <div class="col">
                <div class="card simple" v-on:click="$root.$children[0].advanced=false" v-bind:class="{simple_active:!advanced}">
                    <font-awesome-icon class="card-img" size="6x" icon="cog" inverse />
                    <div class="card-body">
                        <h5 class="card-title">
                            Simple Setup</h5>
                        <ul>
                            <li>Configure necessary settings</li>
                            <li>Get up and running</li>
                            <li>Recommended for new clients</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card advanced" v-on:click="$root.$children[0].advanced=true" v-bind:class="{advanced_active:advanced}" inverse>
                    <font-awesome-icon class="card-img" size="6x" icon="cogs" inverse />
                    <div class="card-body">
                        <h5 class="card-title">
                            Advanced Setup</h5>
                        <ul>
                            <li>Configure all settings</li>
                            <li>See configuration at a glance</li>
                            <li>Recommended for existing clients </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-center" style="padding-left:25px; padding-top:5em">
                <div class="spinner-border spinner-border-sm" role="status">
                </div>
                <span> Changes are automatically saved</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Page1',
        computed: {
            advanced: function() {
                return this.$root.$children[0].advanced;
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Page1 {
        line-height: 2em;
        margin-top: 1em;
    }

    h5 {
        font-weight: bold;
        text-align: center
    }

    .card {
        margin: 10px;
        height: 98%;
    }

    .card-img {
        margin-top: 2rem;
        align-self: center;
    }

    .simple {
        color: white;
        background-color: #E26A6A;
    }

    .advanced {
        color: white;
        background-color: #1bb1b1;
    }

    .simple_active {
        box-shadow: 0 0 20px #ff4d4d;
        background-color: #ff4d4d;
    }

    .advanced_active {
        box-shadow: 0 0 20px #00CCCC;
        background-color: #00CCCC;
    }

    .simple:hover {
        cursor: pointer;
        background-color: #ff4d4d;
    }

    .advanced:hover {
        cursor: pointer;
        background-color: #00CCCC;
    }

</style>
