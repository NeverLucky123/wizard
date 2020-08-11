<template>
    <div class="page_nav">
        <div class="container-fluid">
            <div class="row-md-auto">
            </div>
            <div class="row justify-content-between">
                <div class="col">
                    <button type="button" class="btn btn-outline-success btn-lg" v-on:click="save"><img class="icon mx-auto d-block" src="../assets/open-iconic/svg/file.svg">
                    </button>
                </div>
                <div class="col-md-auto">
                    <button type="button" class="btn btn-secondary btn-lg" v-on:click="back">
                        <img class="icon mx-auto d-block" src="../assets/open-iconic/svg/chevron-left.svg">
                    </button>
                    <button type="button" class="btn btn-forward btn-lg" v-on:click="done" v-if="$parent.index===$parent.pages.length">Done
                    </button>
                    <button type="button" class="btn btn-forward btn-lg" v-on:click="next" v-else>
                        <img class="icon mx-auto d-block" src="../assets/open-iconic/svg/chevron-right.svg">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageNav',
        components: {

        },
        methods: {
            back: function() {
                this.$emit('back')
            },
            next: function() {
                this.$emit('next')
            },
            done: function() {
                this.$emit('done')
            },
            save: function() {
                this.$emit('save')
            }
        },
        data: function() {}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn {
        line-height: 100%;
        margin: 5px;
    }
    
    .btn-forward, .btn-forward:hover, .btn-forward:active, .btn-forward:visited {
        background-color: #44B6AE !important;
    }
    .page_nav {
        width: 100%;
    }

    .icon {
        width: 16px;
        height: 16px;
    }

</style>
