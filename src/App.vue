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
            next: function() {
                if (this.advanced) {
                    if (this.index === 1) {
                        this.index=2.1
                    } else if (this.index.toPrecision(3) == 2.3) {
                        this.index = 3.1
                    } else if (this.index.toPrecision(3) == 3.2) {
                        this.index = 4.1
                    } else if (this.index.toPrecision(3) == 4.3) {
                        this.index = 5
                    } else {
                        this.index += 0.1
                    }
                } else {
                    this.index++;
                }
            },
            back: function() {
                if (this.advanced) {
                    if (this.index.toPrecision(3) == 2.1) {
                        this.index=1
                    } else if (this.index.toPrecision(3)==3.1) {
                        this.index = 2.3
                    } else if (this.index.toPrecision(3) == 4.1) {
                        this.index = 3.2
                    } else if (this.index.toPrecision(3) == 5) {
                        this.index = 4.3
                    } else {
                        this.index -= 0.1
                    }
                } else {
                    this.index--;
                    if (this.index < 1) {
                        this.index = 1;
                    }
                }
            },
            goto: function(index) {
                if (this.advanced) {
                    if (index === 2) {
                        this.index = 2.1;
                    } else if (index === 3) {
                        this.index = 3.1;
                    } else if (index === 4) {
                        this.index = 4.1;
                    } else {
                        this.index=index
                    }
                } else {
                    this.index = index
                }
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
                        fields: business,
                        advanced: [{
                            name: "Information",
                            icon: "chart-pie",
                        }, {
                            name: "Region",
                            icon: "chart-pie",
                        }, {
                            name: "Other",
                            icon: "chart-pie",
                        }]
                    },
                    {
                        name: "Activity Settings",
                        icon: "snowboarding",
                        fields: activity,
                        advanced: [{
                            name: "General",
                            icon: "snowboarding",
                        }, {
                            name: "Delivery",
                            icon: "snowboarding",
                        }]
                    },
                    {
                        name: "Order Settings",
                        icon: "calculator",
                        fields: payment,
                        advanced: [{
                            name: "Product",
                            icon: "calculator",
                        }, {
                            name: "Customer",
                            icon: "snowboarding",
                        }, {
                            name: "Payment",
                            icon: "snowboarding",
                        }]
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
