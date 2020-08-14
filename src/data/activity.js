const activity=[{
    activity_name: "Biking",
    create_invoice: {
        options: [{
            value: "reservation",
            text: "At Reservation (automated)"
        }, {
            value: "delivery",
            text: "At Delivery (automated)"
        }, {
            value: "return",
            text: "After Return"
        }],
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
            }, {
                value: "waiver",
                text: "Multiple Participants (Waiver)"
            }, {
                value: "both",
                text: "Multiple Renters/Participants"
            }],
            current: "yes"
        },
        walk_in: {
            options: [{
                value: "no",
                text: "Single Renter"
            }, {
                value: "yes",
                text: "Multiple Renters"
            }, {
                value: "waiver",
                text: "Multiple Participants (Waiver)"
            }, {
                value: "both",
                text: "Multiple Renters/Participants"
            }],
            current: "yes"
        },
        backend: {
            options: [{
                value: "no",
                text: "Single Renter"
            }, {
                value: "yes",
                text: "Multiple Renters"
            }, {
                value: "waiver",
                text: "Multiple Participants (Waiver)"
            }, {
                value: "both",
                text: "Multiple Renters/Participants"
            }],
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
}, {
    activity_name: "Skiing",
    create_invoice: {
        options: [{
            value: "reservation",
            text: "At Reservation (automated)"
        }, {
            value: "delivery",
            text: "At Delivery (automated)"
        }, {
            value: "return",
            text: "After Return"
        }],
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
            }, {
                value: "waiver",
                text: "Multiple Participants (Waiver)"
            }, {
                value: "both",
                text: "Multiple Renters/Participants"
            }],
            current: "yes"
        },
        walk_in: {
            options: [{
                value: "no",
                text: "Single Renter"
            }, {
                value: "yes",
                text: "Multiple Renters"
            }, {
                value: "waiver",
                text: "Multiple Participants (Waiver)"
            }, {
                value: "both",
                text: "Multiple Renters/Participants"
            }],
            current: "yes"
        },
        backend: {
            options: [{
                value: "no",
                text: "Single Renter"
            }, {
                value: "yes",
                text: "Multiple Renters"
            }, {
                value: "waiver",
                text: "Multiple Participants (Waiver)"
            }, {
                value: "both",
                text: "Multiple Renters/Participants"
            }],
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
}]
export default activity