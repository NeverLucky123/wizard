import timezones from './timezones.js'
const business = {
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
export default business
