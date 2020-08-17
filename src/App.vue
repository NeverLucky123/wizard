<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" v-on:click="open_modal">
            Setup
        </button>

        <!-- Modal -->
        <div class="modal fade" id="Modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"><img src="./assets/site_logo.png" style="width:auto; height:40px"></h5>
                        <button type="button" class="close" v-on:click="close_modal">
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
    import business from './data/business.js'
    import activity from './data/activity.js'
    import payment from './data/payment.js'

    import bus_information from './data/business/information.json'
    import bus_other from './data/business/other.json'
    import bus_payment from './data/business/payment.json'
    import bus_paypal from './data/business/paypal.json'
    import bus_region from './data/business/region.json'

    import act_general from './data/activity/general.json'
    import act_order from './data/activity/order.json'
    import act_customer from './data/activity/customer.json'
    import act_payment from './data/activity/payment.json'


    import tour_general from './data/tour/general.json'

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
                        this.index = 2.1
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
                        this.index = 1
                    } else if (this.index.toPrecision(3) == 3.1) {
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
                        this.index = index
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
                document.getElementById("Modal").className.replace("show", "");
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
                fields: {
                    business: {
                        information: {
                            ...bus_information,
                            ...bus_region
                        },
                        other: bus_other,
                        payment: {
                            ...bus_payment,
                            ...bus_paypal
                        }
                    },
                    activity: [{
                            general: act_general,
                            customer: act_customer,
                            order: act_order,
                            payment: act_payment,
                            name: "bike"
                        },
                        {
                            general: act_general,
                            customer: act_customer,
                            order: act_order,
                            payment: act_payment,
                            name: "ski"
                        }
                    ],
                    tour: {
                        general: tour_general
                    }
                },
                pages: [{
                        name: "Welcome",
                        icon: "chart-pie"
                    },
                    {
                        name: "Business Settings",
                        icon: "chart-pie",
                        fields: business,
                        advanced: [{
                            name: "Information", //info and region
                            icon: "chart-pie",
                        }, {
                            name: "Payment Processor", //Payment, Paypal, QuickBooks
                            icon: "chart-pie",
                        }, {
                            name: "Other", //Other
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
                            name: "Customer", //Order Settings part one
                            icon: "snowboarding",
                        }]
                    },
                    {
                        name: "Order Settings",
                        icon: "calculator",
                        fields: payment,
                        advanced: [{
                            name: "Order",
                            icon: "calculator",
                        }, {
                            name: "Payment",
                            icon: "snowboarding",
                        }, {
                            name: "Tour Settings",
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
