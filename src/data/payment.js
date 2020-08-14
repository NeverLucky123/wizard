const payment=[{
    activity_name: "Biking",
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
}, {
    activity_name: "Skiing",
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
}]
export default payment