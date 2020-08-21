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
    activity_names: []
};

function lookup(i) {
    if (i === 'app_view_timezone') {
        return "app.view_timezone"
    }
    return i;
}
function rev_lookup(i){
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

export async function update(category, url) {
    //make payload
    let payload = Object.keys(category)
    for (let key in payload) {
        payload[key] = lookup(payload[key])
    }
    payload = JSON.stringify(payload)
    let data = new FormData()
    data.set('keys', payload)
    //request
    return await axios.post(url, data)
}
export async function pull() {
    await pull_bus()
    await pull_act()
}

export async function pull_bus() {
    const response = await update(field.business, cors() + 'https://dev.rentrax.io/admin/setup-wizard/get/business-settings')
    for (let option in field.business) {
        if (field.business[option] instanceof Object) {
            field.business[option].current = response.data.find(field => field.key === lookup(option)).value
        } else {
            field.business[option] = response.data.find(({key}) => key === lookup(option)).value
        }
    }
}
export async function pull_act() {
    let response=[]
    const activities=await axios.get(cors() + 'https://dev.rentrax.io/admin/setup-wizard/activities')
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
        let url = cors() + 'https://dev.rentrax.io/admin/setup-wizard/get/activity-settings/' + (Number(i) + 1)
        response[i] = (await axios.post(url, data)).data
    }
    for (let i = 0; i < activities.data.length; i++) {
        let a=JSON.parse(JSON.stringify(field.activity[0]));
        for (let option in a) {
            if (a[option] instanceof Object) {
                a[option].current = response[i].find(field => field.key === lookup(option)).value
            } else {
                a[option] = response[i].find(({key}) => key === lookup(option)).value
            }
        }
        field.activity[i]=JSON.parse(JSON.stringify(a))
    }
}
export async function set(){
    let keys = Object.keys(field.business)
    let payload=[]
    for (let key of keys){
        let val;
        if(field.business[key] instanceof Object){
            val=field.business[key].current
        } else{
            val=field.business[key]
        }
        payload.push({key: rev_lookup(key), value: val})
    }
    let data=new FormData()
    data.set('list', JSON.stringify(payload))
    let url=cors()+'https://dev.rentrax.io/admin/setup-wizard/business-settings'
    await axios.post(url, data).catch(err=>console.log(err))

    // eslint-disable-next-line no-unused-vars
    for (const [i,activity] of field.activity.entries()) {
        console.log(i)
        console.log(activity)
        let keys = Object.keys(activity)
        let payload = []
        for (let key of keys) {
            let val;
            if (activity[key] instanceof Object) {
                val = activity[key].current
            } else {
                val = activity[key]
            }
            payload.push({key: rev_lookup(key), value: val})
        }
        let data = new FormData()
        data.set('list', JSON.stringify(payload))
        let url = cors() + 'https://dev.rentrax.io/admin/setup-wizard/activity-settings/'+Number(field.activity_names[i].id)
        console.log(url)
        await axios.post(url, data).catch(err => console.log(err))
    }
}
