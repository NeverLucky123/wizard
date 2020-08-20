<template>
    <div id="app">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" v-on:click="open_modal">
            Setup
        </button>

        <!-- Modal -->
        <div class="modal fade" id="Modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="container title">
                            <div class="row align-items-center">
                                <div class="col-3">
                                    <h5 class="modal-title"><img src="./assets/site_logo.png" style="width:auto; height:40px" alt="Site Logo"></h5>
                                </div>
                                <div class="col-6 no-gutters">
                                    <div class="row justify-content-center align-items-center">
                                        <div class="col-auto">
                                            <font-awesome-icon class="icon" size="lg" v-bind:icon="icon">
                                            </font-awesome-icon>
                                        </div>
                                        <div class="col-auto">
                                            <h4>{{title}}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3" style="text-align:right">
                                    <button class="btn btn-secondary" v-on:click="close_modal" aria-label="Close alert" type="button" data-close>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-auto no-gutters">
                                    <Progress v-on:goto="goto"></Progress>
                                </div>
                                <div class="col no-gutters page">
                                    <Page class="w-100"></Page>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <PageNav v-on:back="back" v-on:next="next" v-on:done="done"></PageNav>
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

    import {
        field,
        update_bus
    } from './data/index'

    export default {
        name: 'App',
        components: {
            Page,
            Progress,
            PageNav
        },
        methods: {
            next: function() {
                this.index++;
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
                document.getElementById("Modal").className.replace("show", "");
            }
        },
        computed: {
            title: function() {
                return this.pages[this.index - 1].name
            },
            icon: function() {
                return this.pages[this.index - 1].icon
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
                fields: field,
                pages: [{
                        name: "Welcome",
                        icon: "chart-pie"
                    },
                    {
                        name: "Business Settings",
                        icon: "chart-pie"
                    },
                    {
                        name: "Activity Settings",
                        icon: "snowboarding"
                    },
                    {
                        name: "Order Settings",
                        icon: "calculator"
                    },
                    {
                        name: "Get Started",
                        icon: "external-link-alt",
                        fields: null
                    }
                ]
            }
        },
        mounted() {
            //update_act()
            update_bus()
        }

    }

</script>

<style>
    .close {
        margin: 0;
    }

    .no-gutters {
        padding-right: 0 !important;
        padding-left: 0 ! important;
    }

    .icon {
        color: #44B6AE;
    }

    h4 {
        margin: 0 !important;
        color: #44B6AE;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .page {
        padding-right: 5px !important;
        padding-left: 5px !important;
        height: 600px;
        overflow-x: hidden;
        background-color: #F8F8F8;
    }

</style>
