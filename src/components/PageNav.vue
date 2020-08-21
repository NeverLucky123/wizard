<template>
    <div class="page_nav">
        <div class="container-fluid">
            <div class="row-md-auto">
            </div>
            <div class="row align-items-center justify-content-between">
                <div class="col">
                    <button type="button" class="btn btn-secondary btn-lg" v-on:click="save">
                        <font-awesome-icon size="lg" icon="save"></font-awesome-icon>
                    </button>
                    <span class="change-warning" v-if="$parent.changed"><font-awesome-icon size="lg" icon="exclamation-triangle"></font-awesome-icon>
                     Unsaved changes
                    </span>
                    <span class="change-saved" v-else><font-awesome-icon size="lg" icon="check"></font-awesome-icon>
                     No changes
                    </span>
                </div>
                <div class="col">
                    <h4>{{business_name}}</h4>
                </div>
                <div class="col-md-auto">
                    <button type="button" class="btn btn-secondary btn-lg" v-on:click="back">
                        <font-awesome-icon size="lg" icon="chevron-left"></font-awesome-icon>
                    </button>
                    <button type="button" class="btn btn-forward btn-lg" v-on:click="done"
                            v-if="$parent.index===$parent.pages.length">Done
                    </button>
                    <button type="button" class="btn btn-forward btn-lg" v-on:click="next" v-else>
                        <font-awesome-icon size="lg" icon="chevron-right" inverse></font-awesome-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageNav',
        computed: {
            business_name: function () {
                return this.$parent.fields.business.legal_name
            }
        },
        methods: {
            back: function () {
                this.$emit('back')
            },
            next: function () {
                this.$emit('next')
            },
            done: function () {
                this.$emit('done')
            },
            save: function () {
                this.$emit('save')
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn {
        font-weight: bold;
        color: white;
        height: 44.6666667px;
        line-height: 100%;
        margin: 5px;
    }
    .change-warning{
        margin-left: 1em;
        color: orange;
    }
    .change-saved{
        margin-left: 1em;
        color: green;
    }
    .btn-forward,
    .btn-forward:hover,
    .btn-forward:active,
    .btn-forward:visited {
        background-color: #44B6AE !important;
    }

    .page_nav {
        width: 100%;
    }

</style>
