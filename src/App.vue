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
                                    <h5 class="modal-title"><img src="./assets/site_logo.png"
                                                                 style="width:auto; height:40px" alt="Site Logo"></h5>
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
                                    <button class="btn btn-secondary" v-on:click="close_modal" aria-label="Close alert"
                                            type="button" data-close>
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
                        <PageNav v-on:back="back" v-on:save="save" v-on:next="next" v-on:done="done"></PageNav>
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
        field, pull, push, pull_state, push_state
    } from './data/index'

    export default {
        name: 'App',
        components: {
            Page,
            Progress,
            PageNav
        },
        methods: {
            next: function () {
                this.index++;
                push_state(this.index, this.tab, this.advanced)
            },
            back: function () {
                this.index--;
                if (this.index < 1) {
                    this.index = 1;
                }
                push_state(this.index, this.tab, this.advanced)

            },
            save: function () {
                this.updating=true
                push_state(this.index, this.tab, this.advanced)
                push().then(()=>{this.changed=false; this.updating=false})
            },
            goto: function (index) {
                this.index = index
                push_state(this.index, this.tab, this.advanced)
            },
            done: function () {
                this.save()
                this.close_modal()
            },
            open_modal: function () {
                document.getElementById("Modal").style.display = "block";
                document.getElementById("Modal").className += "show"
            },
            close_modal: function () {
                if (this.changed) {
                    let r = confirm("You have unsaved changes. Are you sure you want to leave?");
                    if (!r) {
                        return
                    }
                }
                document.getElementById("Modal").style.display = "none";
                document.getElementById("Modal").className.replace("show", "");
            }
        },
        computed: {
            title: function () {
                return this.pages[this.index - 1].name
            },
            icon: function () {
                return this.pages[this.index - 1].icon
            }
        },
        data: function () {
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
                //If loading data from api
                loaded: false,
                //If changes has been made to fields
                changed: false,
                //If pushing changes to api
                updating: false,
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
        beforeMount() {
            pull_state().then((setup_wizard)=>{
                console.log(setup_wizard)
                this.index=setup_wizard.index
                this.tab=setup_wizard.tab
                this.advanced=setup_wizard.advanced
                pull().then(()=>{this.loaded=true}
                ).catch(err => {
                    console.log(err);
                })
            })
        },
        watch: {
            fields: {
                handler() {
                    if (this.loaded === true) {
                        this.changed = true;
                    }
                },
                deep: true
            },
            changed: function(val){
                if(val){
                    window.onbeforeunload = function () {
                        return 'Are you sure you want to leave?'
                    }
                } else{
                    window.onbeforeunload=null;
                }
            }
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
    .tooltip {
        display: block !important;
        z-index: 10000;
    }

    .tooltip .tooltip-inner {
        background: black;
        color: white;
        border-radius: 16px;
        padding: 5px 10px 4px;
    }

    .tooltip .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
        border-color: black;
        z-index: 1;
    }

    .tooltip[x-placement^="top"] {
        margin-bottom: 5px;
    }

    .tooltip[x-placement^="top"] .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="bottom"] {
        margin-top: 5px;
    }

    .tooltip[x-placement^="bottom"] .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="right"] {
        margin-left: 5px;
    }

    .tooltip[x-placement^="right"] .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip[x-placement^="left"] {
        margin-right: 5px;
    }

    .tooltip[x-placement^="left"] .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip.popover .popover-inner {
        background: #f9f9f9;
        color: black;
        padding: 24px;
        border-radius: 5px;
        box-shadow: 0 5px 30px rgba(black, .1);
    }

    .tooltip.popover .popover-arrow {
        border-color: #f9f9f9;
    }

    .tooltip[aria-hidden='true'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity .15s, visibility .15s;
    }

    .tooltip[aria-hidden='false'] {
        visibility: visible;
        opacity: 1;
        transition: opacity .15s;
    }
</style>
