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
    import timezones from './timezones.js'
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
                            currency_name: {
                                options: [{
                                    value: "CAD",
                                    text: "Canadian Dollar"
                                }, {
                                    value: "USD",
                                    text: "US Dollar"
                                }, {
                                    value: "EUR",
                                    text: "Euro"
                                }, {
                                    value: "GBP",
                                    text: "British Pound"
                                }, {
                                    value: "NZD",
                                    text: "New Zealand Dollar"
                                }, {
                                    value: "JPY",
                                    text: "Japanese Yen"
                                }, {
                                    value: "AUD",
                                    text: "Australian Dollar"
                                }, {
                                    value: "CLP",
                                    text: "Chile Peso"
                                }, {
                                    value: "ZAR",
                                    text: "South Africa Rand"
                                }, {
                                    value: "CZK",
                                    text: "Czech koruna"
                                }, {
                                    value: "SEK",
                                    text: "Swedish krona"
                                }],
                                current: "CAD"
                            },
                            currency_symbol: {
                                options: [{
                                    value: "$",
                                    text: "$ - Dollar Sign"
                                }, {
                                    value: "€",
                                    text: "€ - Euro Sign"
                                }, {
                                    value: "£",
                                    text: "£ - Pound Sign"
                                }, {
                                    value: "NZ$",
                                    text: "NZ$ - New Zealand Dollar"
                                }, {
                                    value: "¥",
                                    text: "¥ - Japanese Yen"
                                }, {
                                    value: "AU$",
                                    text: "AU$ - Australian dollar"
                                }, {
                                    value: "R",
                                    text: "R - South Africa Rand"
                                }, {
                                    value: "Kč",
                                    text: "Kč - Czech koruna"
                                }, {
                                    value: "kr",
                                    text: "kr - Swedish krona"
                                }],
                                current: "$"
                            },
                            timezone: {
                                options: timezones,
                                current: "America/Vancouver"
                            },
                            url: "",
                            opening: "09:00",
                            closing: "17:00",
                            days: {
                                Sun: {
                                    options: [{
                                        value: "0",
                                        text: "Closed"
                                    }, {
                                        value: "1",
                                        text: "Open"
                                    }],
                                    current: "0"
                                },
                                Mon: {
                                    options: [{
                                        value: "0",
                                        text: "Closed"
                                    }, {
                                        value: "1",
                                        text: "Open"
                                    }],
                                    current: "1"
                                },
                                Tue: {
                                    options: [{
                                        value: "0",
                                        text: "Closed"
                                    }, {
                                        value: "1",
                                        text: "Open"
                                    }],
                                    current: "1"
                                },
                                Wed: {
                                    options: [{
                                        value: "0",
                                        text: "Closed"
                                    }, {
                                        value: "1",
                                        text: "Open"
                                    }],
                                    current: "1"
                                },
                                Thur: {
                                    options: [{
                                        value: "0",
                                        text: "Closed"
                                    }, {
                                        value: "1",
                                        text: "Open"
                                    }],
                                    current: "1"
                                },
                                Fri: {
                                    options: [{
                                        value: "0",
                                        text: "Closed"
                                    }, {
                                        value: "1",
                                        text: "Open"
                                    }],
                                    current: "1"
                                },
                                Sat: {
                                    options: [{
                                        value: "0",
                                        text: "Closed"
                                    }, {
                                        value: "1",
                                        text: "Open"
                                    }],
                                    current: "0"
                                }
                            },
                            taxes: [{
                                name: "GST",
                                amount: "12"
                            }]
                        }
                    },
                    {
                        name: "Activity Settings",
                        icon: "snowboarding",
                        fields: [{
                                activity_name: "Biking",
                                create_invoice: {
                                    options: [{
                                            value: "reservation",
                                            text: "At Reservation (automated)"
                                        }, {
                                            value: "delivery",
                                            text: "At Delivery (automated)"
                                        },
                                        {
                                            value: "return",
                                            text: "After Return"
                                        }
                                    ],
                                    current: "return"
                                },
                                pre_auth: {
                                    options: [{
                                        value: "0",
                                        text: "No"
                                    }, {
                                        value: "1",
                                        text: "Yes"
                                    }],
                                    current: "1"
                                },
                                confirm_res: {
                                    options: [{
                                        value: "manual",
                                        text: "Manually Confirm"
                                    }, {
                                        value: "automatic",
                                        text: "Automatically Confirm"
                                    }],
                                    current: "automatic"
                                },
                                close_res: {
                                    options: [{
                                        value: "manual",
                                        text: "Manually Close"
                                    }, {
                                        value: "automatic",
                                        text: "Automatically Close"
                                    }],
                                    current: "automatic"
                                },
                                product_option: {
                                    options: [{
                                        value: "0",
                                        text: "No"
                                    }, {
                                        value: "1",
                                        text: "Yes"
                                    }],
                                    current: "1"
                                },
                                //single renter only
                                check_product_avail: {
                                    options: [{
                                        value: "no",
                                        text: "No"
                                    }, {
                                        value: "yes",
                                        text: "Yes"
                                    }, {
                                        value: "size",
                                        text: "Consider Size"
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
                                order_time_unit: {
                                    options: [{
                                        value: "hour",
                                        text: "Hour"
                                    }, {
                                        value: "day",
                                        text: "Day"
                                    }],
                                    current: "hour"
                                },
                                //multi_setting
                                reorder: {
                                    online: {
                                        options: [{
                                            value: "0",
                                            text: "No"
                                        }, {
                                            value: "1",
                                            text: "Yes"
                                        }],
                                        current: "0"
                                    },
                                    walk_in: {
                                        options: [{
                                            value: "0",
                                            text: "No"
                                        }, {
                                            value: "1",
                                            text: "Yes"
                                        }],
                                        current: "0"
                                    },
                                    backend: {
                                        options: [{
                                            value: "0",
                                            text: "No"
                                        }, {
                                            value: "1",
                                            text: "Yes"
                                        }],
                                        current: "0"
                                    },
                                    phone: {
                                        options: [{
                                            value: "0",
                                            text: "No"
                                        }, {
                                            value: "1",
                                            text: "Yes"
                                        }],
                                        current: "0"
                                    },
                                },
                                //per piece of equipment;
                                //multi_setting
                                multi_participant: {
                                    online: {
                                        options: [{
                                                value: "no",
                                                text: "Single Renter"
                                            }, {
                                                value: "yes",
                                                text: "Multiple Renters"
                                            },
                                            {
                                                value: "waiver",
                                                text: "Multiple Participants (Waiver)"
                                            },
                                            {
                                                value: "both",
                                                text: "Multiple Renters/Participants"
                                            }

                                        ],
                                        current: "yes"
                                    },
                                    walk_in: {
                                        options: [{
                                                value: "no",
                                                text: "Single Renter"
                                            }, {
                                                value: "yes",
                                                text: "Multiple Renters"
                                            },
                                            {
                                                value: "waiver",
                                                text: "Multiple Participants (Waiver)"
                                            },
                                            {
                                                value: "both",
                                                text: "Multiple Renters/Participants"
                                            }

                                        ],
                                        current: "yes"
                                    },
                                    backend: {
                                        options: [{
                                                value: "no",
                                                text: "Single Renter"
                                            }, {
                                                value: "yes",
                                                text: "Multiple Renters"
                                            },
                                            {
                                                value: "waiver",
                                                text: "Multiple Participants (Waiver)"
                                            },
                                            {
                                                value: "both",
                                                text: "Multiple Renters/Participants"
                                            }

                                        ],
                                        current: "yes"
                                    },
                                    phone: {
                                        options: [{
                                            value: "no",
                                            text: "Single Renter"
                                        }, {
                                            value: "yes",
                                            text: "Multiple Renters"
                                        }],
                                        current: "yes"
                                    }
                                }
                            },
                            {
                                activity_name: "Skiing",
                                create_invoice: {
                                    options: [{
                                            value: "reservation",
                                            text: "At Reservation (automated)"
                                        }, {
                                            value: "delivery",
                                            text: "At Delivery (automated)"
                                        },
                                        {
                                            value: "return",
                                            text: "After Return"
                                        }
                                    ],
                                    current: "return"
                                },
                                pre_auth: {
                                    options: [{
                                        value: "0",
                                        text: "No"
                                    }, {
                                        value: "1",
                                        text: "Yes"
                                    }],
                                    current: "1"
                                },
                                confirm_res: {
                                    options: [{
                                        value: "manual",
                                        text: "Manually Confirm"
                                    }, {
                                        value: "automatic",
                                        text: "Automatically Confirm"
                                    }],
                                    current: "automatic"
                                },
                                close_res: {
                                    options: [{
                                        value: "manual",
                                        text: "Manually Close"
                                    }, {
                                        value: "automatic",
                                        text: "Automatically Close"
                                    }],
                                    current: "automatic"
                                },
                                product_option: {
                                    options: [{
                                        value: "0",
                                        text: "No"
                                    }, {
                                        value: "1",
                                        text: "Yes"
                                    }],
                                    current: "1"
                                },
                                //single renter only
                                check_product_avail: {
                                    options: [{
                                        value: "no",
                                        text: "No"
                                    }, {
                                        value: "yes",
                                        text: "Yes"
                                    }, {
                                        value: "size",
                                        text: "Consider Size"
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
                                order_time_unit: {
                                    options: [{
                                        value: "hour",
                                        text: "Hour"
                                    }, {
                                        value: "day",
                                        text: "Day"
                                    }],
                                    current: "hour"
                                },
                                //multi_setting
                                reorder: {
                                    online: {
                                        options: [{
                                            value: "0",
                                            text: "No"
                                        }, {
                                            value: "1",
                                            text: "Yes"
                                        }],
                                        current: "0"
                                    },
                                    walk_in: {
                                        options: [{
                                            value: "0",
                                            text: "No"
                                        }, {
                                            value: "1",
                                            text: "Yes"
                                        }],
                                        current: "0"
                                    },
                                    backend: {
                                        options: [{
                                            value: "0",
                                            text: "No"
                                        }, {
                                            value: "1",
                                            text: "Yes"
                                        }],
                                        current: "0"
                                    },
                                    phone: {
                                        options: [{
                                            value: "0",
                                            text: "No"
                                        }, {
                                            value: "1",
                                            text: "Yes"
                                        }],
                                        current: "0"
                                    },
                                },
                                //per piece of equipment;
                                //multi_setting
                                multi_participant: {
                                    online: {
                                        options: [{
                                                value: "no",
                                                text: "Single Renter"
                                            }, {
                                                value: "yes",
                                                text: "Multiple Renters"
                                            },
                                            {
                                                value: "waiver",
                                                text: "Multiple Participants (Waiver)"
                                            },
                                            {
                                                value: "both",
                                                text: "Multiple Renters/Participants"
                                            }

                                        ],
                                        current: "yes"
                                    },
                                    walk_in: {
                                        options: [{
                                                value: "no",
                                                text: "Single Renter"
                                            }, {
                                                value: "yes",
                                                text: "Multiple Renters"
                                            },
                                            {
                                                value: "waiver",
                                                text: "Multiple Participants (Waiver)"
                                            },
                                            {
                                                value: "both",
                                                text: "Multiple Renters/Participants"
                                            }

                                        ],
                                        current: "yes"
                                    },
                                    backend: {
                                        options: [{
                                                value: "no",
                                                text: "Single Renter"
                                            }, {
                                                value: "yes",
                                                text: "Multiple Renters"
                                            },
                                            {
                                                value: "waiver",
                                                text: "Multiple Participants (Waiver)"
                                            },
                                            {
                                                value: "both",
                                                text: "Multiple Renters/Participants"
                                            }

                                        ],
                                        current: "yes"
                                    },
                                    phone: {
                                        options: [{
                                            value: "no",
                                            text: "Single Renter"
                                        }, {
                                            value: "yes",
                                            text: "Multiple Renters"
                                        }],
                                        current: "yes"
                                    }
                                }
                            }
                        ]
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
        overflow-x: hidden;
        background-color: #F8F8F8;
    }

</style>
