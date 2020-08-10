<template>
    <div class="page_nav">
        <div class="container-fluid">
            <div class="row-md-auto">
            </div>
            <div class="row justify-content-between">
                <div class="col">
                    <button type="button" class="btn btn-outline-success btn-lg" v-on:click="save">Save <img class="icon" src="../assets/open-iconic/svg/file.svg">
                    </button>
                </div>
                <div class="col-md-auto">
                    <button type="button" class="btn btn-outline-secondary btn-lg" v-on:click="back">Back <img class="icon" src="../assets/open-iconic/svg/chevron-left.svg">
                    </button>
                    <button type="button" class="btn btn-outline-secondary btn-lg" v-on:click="skip">Skip
                        <img class="icon" src="../assets/open-iconic/svg/media-skip-forward.svg">
                    </button>
                    <button type="button" class="btn btn-outline-success btn-lg" v-on:click="done" v-if="$parent.index===$parent.pages.length">Done
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-lg" v-on:click="next" v-else>Next<img class="icon" src="../assets/open-iconic/svg/chevron-right.svg">
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
            skip: function() {
                this.$emit('skip')
            },
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
        data: function() {
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn {}

    .page_nav {
        width: 100%;
    }

    .icon {
        width: 16px;
        height: 16px;
    }

</style>
