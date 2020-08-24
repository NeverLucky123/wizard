import Vue from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faChartPie,
    faSnowboarding,
    faCalculator,
    faPen,
    faSitemap,
    faMoneyCheckAlt,
    faShoppingCart,
    faCogs,
    faHome,
    faCog,
    faSave,
    faMoneyBillAlt,
    faCalendarAlt,
    faPlusCircle,
    faChevronRight,
    faChevronLeft,
    faExternalLinkAlt,
    faChevronCircleUp,
    faChevronCircleDown,
    faExclamationTriangle,
    faCheck
} from '@fortawesome/free-solid-svg-icons'

import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faChartPie, faSnowboarding, faCalculator, faPen, faSitemap, faMoneyCheckAlt, faShoppingCart, faCogs,
    faHome, faCog, faSave, faMoneyBillAlt, faCalendarAlt, faPlusCircle, faChevronRight, faChevronLeft, faExternalLinkAlt,
    faChevronCircleUp, faChevronCircleDown, faExclamationTriangle, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
}).$mount('#app')
