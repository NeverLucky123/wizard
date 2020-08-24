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

import Vue from 'vue'
export var field = {
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
    }
    ],
    activity_names: [{name: "", id: ""}]
};
function lookup(i) {
    if (i === 'app_view_timezone') {
        return "app.view_timezone"
    }
    return i;
}

function rev_lookup(i) {
    if (i === 'app.view_timezone') {
        return "app_view_timezone"
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

async function pull_bus() {
    let payload = Object.keys(field.business)
    for (let key in payload) {
        payload[key] = lookup(payload[key])
    }
    payload = JSON.stringify(payload)
    let data = new FormData()
    data.set('keys', payload)
    //request
    const response = await axios.post(cors() + 'https://dev.rentrax.io/admin/setup-wizard/get/business-settings', data)
    for (let option in field.business) {
        if (field.business[option] instanceof Object) {
            field.business[option].current = response.data.find(field => field.key === lookup(option)).value
        } else {
            field.business[option] = response.data.find(({key}) => key === lookup(option)).value
        }
    }
    console.log('pull_bus')
}

async function pull_act() {
    let response = []
    const activities = await axios.get(cors() + 'https://dev.rentrax.io/admin/setup-wizard/activities')
    for (let i = 0; i < activities.data.length; i++) {
        field.activity_names[i] = activities.data[i];
        //make payload
        let payload = Object.keys(field.activity[0])
        for (let key of payload) {
            key = lookup(key)
        }
        payload = JSON.stringify(payload)
        let data = new FormData()
        data.set('keys', payload)
        //request
        let url = cors() + 'https://dev.rentrax.io/admin/setup-wizard/get/activity-settings/' + Number(field.activity_names[i].id)
        response[i] = (await axios.post(url, data)).data
    }
    for (let i = 0; i < activities.data.length; i++) {
        let a = JSON.parse(JSON.stringify(field.activity[0]));
        for (let option in a) {
            if (a[option] instanceof Object) {
                a[option].current = response[i].find(field => field.key === lookup(option)).value
            } else {
                a[option] = response[i].find(({key}) => key === lookup(option)).value
            }
        }
        Vue.set(field.activity, i, JSON.parse(JSON.stringify(a)))
       // field.activity[i] = JSON.parse(JSON.stringify(a))
    }
    console.log('pull_act')
}
export async function pull_state() {
    let url = cors() + 'https://dev.rentrax.io/admin/setup-wizard/get/business-settings'
    let data = new FormData()
    let payload = ["setup_wizard"]
    data.set('keys', JSON.stringify(payload))
    let res=await axios.post(url, data).catch(err => console.log(err))
    return(JSON.parse(res.data[0].value))
}
export async function pull() {
    await pull_bus()
   return await pull_act()
}

export async function push() {
    await push_bus()
   return await push_act()
}

export async function push_state(index, tab, advanced) {
    let url = cors() + 'https://dev.rentrax.io/admin/setup-wizard/business-settings'
    let data = new FormData()
    let setup_wizard={
        index: index,
        tab: tab,
        advanced: advanced
    }
    let payload = [{key: 'setup_wizard', value: JSON.stringify(setup_wizard)}]
    console.log(payload)
    data.set('list', JSON.stringify(payload))
    await axios.post(url, data).catch(err => console.log(err))
}

async function push_bus() {
    let keys = Object.keys(field.business)
    let payload = []
    for (let key of keys) {
        let val;
        if (field.business[key] instanceof Object) {
            val = field.business[key].current
            if (val == null) {
                val = field.business[key].options[0].value
            }
        } else {
            val = field.business[key]
            if (val == null) {
                val = ""
            }
        }
        payload.push({key: rev_lookup(key), value: val})
    }
    let data = new FormData()
    data.set('list', JSON.stringify(payload))
    let url = cors() + 'https://dev.rentrax.io/admin/setup-wizard/business-settings'
    await axios.post(url, data).catch(err => console.log(err))
}

async function push_act() {
    for (const [i, activity] of field.activity.entries()) {
        console.log(i)
        console.log(activity)
        let keys = Object.keys(activity)
        let payload = []
        for (let key of keys) {
            let val;
            if (activity[key] instanceof Object) {
                val = activity[key].current
                if (val == null) {
                    val = activity[key].options[0].value
                }
            } else {
                val = activity[key]
                if (val == null) {
                    val = ""
                }
            }
            payload.push({key: rev_lookup(key), value: val})
        }
        let data = new FormData()
        data.set('list', JSON.stringify(payload))
        let url = cors() + 'https://dev.rentrax.io/admin/setup-wizard/activity-settings/' + Number(field.activity_names[i].id)
        console.log(url)
        await axios.post(url, data).catch(err => console.log(err))
    }
}
