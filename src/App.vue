<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" v-on:click="open_modal">
            Setup 
        </button>

        <!-- Modal -->
        <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Setup</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="close_modal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-auto">
                                    <Progress ref='progress'></Progress>
                                </div>
                                <div class="col page">
                                    <Page ref='page'></Page>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <PageNav v-on:skip="skip" v-on:next="next"></PageNav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Page from './components/Page.vue'
    import Progress from './components/Progress.vue'
    import PageNav from './components/PageNav.vue'

    export default {
        name: 'App',
        components: {
            Page,
            Progress,
            PageNav
        },
        methods: {
            hello: function() {
                console.log('hello')
            },
            skip: function() {
                this.$refs.page.next()
                this.$refs.progress.next()
            },
            next: function() {
                this.$refs.page.next()
                this.$refs.progress.next()
            },
            open_modal() {
                document.getElementById("Modal").style.display = "block";
                document.getElementById("Modal").className += "show"
            },
            close_modal() {
                document.getElementById("Modal").style.display = "none";
                document.getElementById("exampleModal").className.replace("show", "");
            }
        }
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .page {
        background-color: #F8F8F8;
    }

</style>
