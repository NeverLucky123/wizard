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
                        <h5 class="modal-title" id="exampleModalLabel"><img src="https://dev.rentrax.io/images/site_logo" style="width:auto; height:40px"></h5>
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
                console.log(this.pages)
                console.log(this.pages.length)

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
                /*
                ---------------------------------------------------
                For attributes bound to Checkbox, always put the false  
                item as first member of array, [0].
                ---------------------------------------------------
                */
                pages: [{
                        name: "Business Settings",
                        icon: "chart-pie",
                        fields: {
                            opening: "09:00",
                            closing: "17:00"
                        }
                    },
                    {
                        name: "Activity Settings",
                        icon: "snowboarding",
                        fields: {
                            auto_create_invoice: {
                                options: [{
                                    value: "0",
                                    text: "Show Finish Page"
                                }, {
                                    value: "1",
                                    text: "Preview Invoice"
                                }],
                                current: "1"
                            },
                            address_required: {
                                options: [{
                                    value: "0",
                                    text: "No"
                                }, {
                                    value: "1",
                                    text: "Yes"
                                }],
                                current: "0"
                            },
                            //single renter only
                            customer_input: {
                                options: [{
                                    value: "order_page",
                                    text: "At Beginning"
                                }, {
                                    value: "checkout_page",
                                    text: "At Checkout"
                                }],
                                current: "checkout_page"
                            },
                            //sign_box if false, advanced waiver if true
                            waiver: {
                                options: [{
                                    value: "enhanced_waiver",
                                    text: "Advanced Waiver"
                                }, {
                                    value: "sign",
                                    text: "Sign Box"
                                }],
                                current: "enhanced_waiver"
                            },
                            //when doing inventory checks
                            consider_size: {
                                options: [{
                                    value: "yes",
                                    text: "no"
                                }, {
                                    value: "size",
                                    text: "yes"
                                }],
                                current: "size"
                            },
                            //allow customers to see availibility calendar
                            avail_cal: {
                                options: [{
                                    value: "0",
                                    text: "No"
                                }, {
                                    value: "1",
                                    text: "Yes"
                                }],
                                current: "1"
                            },
                            //multi_setting
                            reorder: {
                                options: [{
                                    value: "0",
                                    text: "No"
                                }, {
                                    value: "1",
                                    text: "Yes"
                                }],
                                current: "0"
                            },
                            //per piece of equipment;
                            //multi_setting
                            multi_participant: {
                                options: [{
                                    value: "0",
                                    text: "Placeholder"
                                }, {
                                    value: "1",
                                    text: "multiple fields?"
                                }],
                                current: "1"
                            }
                        }
                    },
                    {
                        name: "Payment",
                        icon: "calculator",
                        fields: {
                            //0 full amount, 1 deposit, 2 delay payment
                            credit_card: {
                                online: {
                                    options: [{
                                        value: "none",
                                        text: "None"
                                    }, {
                                        value: "validate",
                                        text: "Validate"
                                    }, {
                                        value: "charge_reservation",
                                        text: "Charge Reservation Fee"
                                    }, {
                                        value: "charge_full",
                                        text: "Charge Full Amount"
                                    }],
                                    current: "charge_full"
                                },
                                walk_in: {
                                    options: [{
                                        value: "none",
                                        text: "None"
                                    }, {
                                        value: "validate",
                                        text: "Validate"
                                    }, {
                                        value: "charge_reservation",
                                        text: "Charge Reservation Fee"
                                    }, {
                                        value: "charge_full",
                                        text: "Charge Full Amount"
                                    }],
                                    current: "charge_full"
                                },
                                backend: {
                                    options: [{
                                        value: "none",
                                        text: "None"
                                    }, {
                                        value: "validate",
                                        text: "Validate"
                                    }, {
                                        value: "charge_reservation",
                                        text: "Charge Reservation Fee"
                                    }, {
                                        value: "charge_full",
                                        text: "Charge Full Amount"
                                    }],
                                    current: "charge_full"
                                },
                                phone: {
                                    options: [{
                                        value: "none",
                                        text: "None"
                                    }, {
                                        value: "validate",
                                        text: "Validate"
                                    }, {
                                        value: "charge_reservation",
                                        text: "Charge Reservation Fee"
                                    }, {
                                        value: "charge_full",
                                        text: "Charge Full Amount"
                                    }],
                                    current: "charge_full"
                                }
                            },
                            delay_payment: {
                                walk_in: {
                                    options: [{
                                        value: "no",
                                        text: "No"
                                    }, {
                                        value: "yes",
                                        text: "Yes"
                                    }, {
                                        value: "admin",
                                        text: "Require staff"
                                    }],
                                    current: "admin"
                                },
                                backend: {
                                    options: [{
                                        value: "no",
                                        text: "No"
                                    }, {
                                        value: "yes",
                                        text: "Yes"
                                    }],
                                    current: "yes"
                                }
                            }
                        }
                    },
                    {
                        name: "Terms and conditions",
                        icon: "pen",
                        fields: null
                    },
                    {
                        name: "Subcategories",
                        icon: "sitemap",
                        //static link and images, no data
                        fields: null

                    },
                    {
                        name: "Pricing",
                        icon: "money-check-alt",

                        fields: null

                    },
                    {
                        name: "Booking",
                        icon: "shopping-cart",
                        options: null
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
        margin-right: 0 !important;
        margin-left: 0;
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
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: #F8F8F8;
    }

</style>
