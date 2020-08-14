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
                        <h5 class="modal-title" id="exampleModalLabel"><img src="./assets/site_logo.png" style="width:auto; height:40px"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="close_modal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-auto no-gutters">
                                    <Progress v-on:goto="goto"></Progress>
                                </div>
                                <div class="col page">
                                    <Page class="w-100"></Page>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <PageNav v-on:skip="skip" v-on:back="back" v-on:next="next" v-on:done="done"></PageNav>
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
    import business from './data/business.js'
    import activity from './data/activity.js'
    import payment from './data/payment.js'

    export default {
        name: 'App',
        components: {
            Page,
            Progress,
            PageNav
        },
        methods: {
            skip: function() {
                this.index++;
                if (this.index > this.pages.length) {
                    this.index = this.pages.length;
                }
            },
            next: function() {
                this.index++;
                if (this.index > this.pages.length) {
                    this.index = this.pages.length;
                }
            },
            back: function() {
                this.index--;
                if (this.index < 1) {
                    this.index = 1;
                }
            },
            goto: function(index) {
                this.index = index
            },
            done: function() {
                this.close_modal()
            },
            open_modal: function() {
                document.getElementById("Modal").style.display = "block";
                document.getElementById("Modal").className += "show"
            },
            close_modal: function() {
                document.getElementById("Modal").style.display = "none";
                document.getElementById("exampleModal").className.replace("show", "");
            }
        },
        data: function() {
            return {
                index: 1,
                tab: 0,
                advanced: false,
                /*
                ---------------------------------------------------
                For attributes bound to Checkbox, always put the false  
                item as first member of array, [0].
                ---------------------------------------------------
                */
                pages: [{
                        name: "Welcome",
                        icon: null
                    },
                    {
                        name: "Business Settings",
                        icon: "chart-pie",
                        fields: business
                    },
                    {
                        name: "Activity Settings",
                        icon: "snowboarding",
                        fields: activity
                    },
                    {
                        name: "Payment",
                        icon: "calculator",
                        fields: payment
                    },
                    {
                        name: "Get Started",
                        icon: "external-link-alt",
                        fields: null
                    }
                ]
            }
        }

    }

</script>

<style>
    .close {
        transform: translateY(12%);
    }

    .no-gutters {
        padding-right: 0 !important;
        padding-left: 0 ! important;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .page {
        padding-right: 0px !important;
        height: 600px;
        overflow-x: hidden;
        background-color: #F8F8F8;
    }

</style>
