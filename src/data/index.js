// eslint-disable-next-line no-unused-vars
const axios = require('axios')
import bus_information from './business/information.json'
import bus_other from './business/other.json'
import bus_payment from './business/payment.json'
import bus_paypal from './business/paypal.json'
import bus_region from './business/region.json'

import act_general from './activity/general.json'
import act_order from './activity/order.json'
import act_customer from './activity/customer.json'
import act_payment from './activity/payment.json'
import tour_general from './tour/general.json'

var field = {
    business: {
            ...bus_information,
            ...bus_region,
            ...bus_other,
            ...bus_payment,
            ...bus_paypal
    },
    activity: [{
        ...act_general,
        ...act_customer,
        ...act_order,
        ...act_payment,
        name: "bike"
    },
        {
            ...act_general,
            ...act_customer,
            ...act_order,
            ...act_payment,
            name: "ski"
        }
    ],
    tour: {
        general: tour_general
    }
};

function lookup(i) {
    if (i === 'app_view_timezone') {
        return "app.view_timezone"
    }
    return i;
}

function cors() {
    const url = new URL(window.location.href)
    const regex = /\w+\.\w+$/gm;
    const matches = url.hostname.match(regex)
    if (!matches) {
        return 'http://localhost:4000/'
    } else {
        return ''
    }
}

export function update(category, url) {
    let res;
    for (let subcat in category) {
        if (category[subcat] instanceof Object) {
            //make payload
            let payload = Object.keys(category[subcat])
            for (let key in payload) {
                payload[key] = lookup(payload[key])
            }
            payload = JSON.stringify(payload)
            // console.log(payload)
            let data = new FormData()
            data.set('keys', payload)
            //request
            axios.post(url,
                data
            ).then(response => {
                    res = response.data;
                }
            ).catch(err => console.log(err))
                .then(() => {
                    for (let i in category[subcat]) {
                        if (category[subcat][i] instanceof Object) {
                            category[subcat][i].current = res.find(({key}) => key === lookup(i)).value
                        } else {
                            category[subcat][i] = res.find(({key}) => key === lookup(i)).value
                        }
                    }
                }).catch(err => console.log(err))
        }
    }
}

export function update_bus() {
    update(field.business, cors() + 'https://dev.rentrax.io/admin/setup-wizard/get/business-settings')
}

export function update_act() {
    let res = [];
    let promises = [];
    for (let i = 0; i < field.activity.length; i++) {
        promises[i] = [];
        res[i]=[]
        for (let cat in field.activity[i]) {
            if (field.activity[i][cat] instanceof Object) {
                //make payload
                let payload = Object.keys(field.activity[i][cat])
                for (let key in payload) {
                    payload[key] = lookup(payload[key])
                }
                payload = JSON.stringify(payload)
                let data = new FormData()
                data.set('keys', payload)
                //request
                promises[i].push(
                    axios.post("http://localhost:4000/https://dev.rentrax.io/admin/setup-wizard/get/activity-settings/" + (i + 1),
                        data,
                    ).then(response => {
                            res[i].push(response)
                            //console.log(res.find(({key}) => key === "add_to_invoice"))
                        }
                    ))
            }
        }
    }
    console.log(promises)
    for (let i = 0; i < field.activity.length; i++) {
        Promise.all(promises[i]).then(() => {
            console.log(res[i])
        })
    }
}

export {field};
