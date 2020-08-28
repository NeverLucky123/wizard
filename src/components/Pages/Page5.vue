<template>
    <div class="Page5">
        <div class="Page5Booking">
            <div class="card" v-on:click="active=1" v-bind:class="{closed:active!=1}">
                <div class="card-body">
                    <h5 class="card-title">
                        <font-awesome-icon size="xs" icon="calendar-alt" /> Place an Order</h5>
                    <ol v-if="active==1">
                        <li>Set the <a class="btn btn-dark" href="#" role="button">Rental Period</a></li>
                        <li>Enter the test information in <a class="btn btn-dark" href="#" role="button">Customer Info</a></li>
                        <li>Select a subcategory</li>
                        <li>Click <a class="btn btn-dark" href="#" role="button">CHECKOUT</a></li>
                        <li>Sign the waiver</li>
                        <li>Enter test payment info: <a class="btn btn-dark" href="#" role="button">411111111</a>, <a class="btn btn-dark" href="#" role="button">04/21</a> and <a class="btn btn-dark" href="#" role="button">111</a> </li>
                        <li>Pay full amount</li>
                    </ol>
                    <a class="btn btn-forward" :href="'//'+domain+'/reservations/1?source=back_end'" target="_blank" role="button">
                        <font-awesome-icon size="xs" icon="external-link-alt" /> Rent Orders</a>
                </div>
            </div>
        </div>
        <div class="Page5Category">
            <div class="card" v-on:click="active=2" v-bind:class="{closed:active!=2}">
                <div class="card-body">
                    <h5 class="card-title">
                        <font-awesome-icon size="xs" icon="cogs" /> Create a Category</h5>
                    <ol v-if="active==2">
                        <li>Let's create a category called "Bikes". Click <a class="btn btn-dark" href="#" role="button"> +</a> on the <a class="btn btn-dark" href="#" role="button">Rental Groups</a> bar. Input "Bikes" as the Group Name.
                        </li>
                        <li>Now let's create a subcategory, “E-Bikes”. Click <a class="btn btn-dark" href="#" role="button"> +</a> on the <a class="btn btn-dark" href="#" role="button">Bike</a> category. Input "E-Bikes" as the Category Name.
                        </li>
                        <li>Click <a class="btn btn-dark" href="#" role="button">
                                <font-awesome-icon size="xs" icon="cog"></font-awesome-icon>
                            </a> </li>
                        <li>Here you can add a customer-facing description and picture to this type of product.</li>
                        <li>Set <a class="btn btn-dark" href="#" role="button">Product Size Required</a> to <a class="btn btn-dark" href="#" role="button">Yes</a> if you want customers to be able to choose their size.</li>
                        <li>Check <a class="btn btn-dark" href="#" role="button">Is SKU-based?</a> if you want to keep track of inventory individually.</li>
                    </ol>
                    <a class="btn btn-forward" :href="'//'+domain+'/admin/products/categories'" target="_blank" role="button">
                        <font-awesome-icon size="xs" icon="external-link-alt" /> Categories</a>
                </div>
            </div>
        </div>
        <div class="Page5Pricing">
            <div class="card" v-on:click="active=3" v-bind:class="{closed:active!=3}">
                <div class="card-body">
                    <h5 class="card-title">
                        <font-awesome-icon size="xs" icon="calculator" /> Draft a Pricing Template</h5>
                    <ol v-if="active==3">
                        <li>Scroll to the bottom of the page and click <a class="btn btn-dark" role="button">+ New Pricing</a></li>
                        <li>Put in "E-Bikes" for the template name
                            <ul>
                                <li><a class="btn btn-dark" href="/admin/prices/1/edit" target="_blank" role="button">
                                        <font-awesome-icon size="xs" icon="pen" /> Edit</a> E-Bikes pricing.
                                </li>
                                <li>Set <a class="btn btn-dark" href="#" role="button">Pricing Model</a> to <a class="btn btn-dark" href="#" role="button">Linear</a>
                                </li>
                                <li>Set <a class="btn btn-dark" href="#" role="button">Duration Model</a> to <a class="btn btn-dark" href="#" role="button">Integer Days</a> or <a class="btn btn-dark" href="#" role="button">Integer Hours</a>
                                </li>
                            </ul>
                        </li>
                        <li>Set <a class="btn btn-dark" href="#" role="button">Stop Calc at Plan Finish</a> to <a class="btn btn-dark" href="#" role="button">Enabled</a>
                        </li>
                        <li>Go to the <a class="btn btn-dark" href="#" role="button">
                                <font-awesome-icon size="xs" icon="money-bill-alt" /> Price Table</a> tab
                            <ul>
                                <li>Let's set the first duration. Set the <a class="btn btn-dark" href="#" role="button">Cost Type</a> to total (flat), and enter the amount for this range of time.
                                </li>
                            </ul>

                        </li>
                    </ol>
                    <a class="btn btn-forward" :href="'//'+domain+'/admin/prices'" target="_blank" role="button">
                        <font-awesome-icon size="xs" icon="external-link-alt" /> Pricings</a>
                </div>
            </div>
        </div>
        <div class="Page5Terms">
            <div class="card" v-on:click="active=4" v-bind:class="{closed:active!=4}">
                <div class="card-body">
                    <h5 class="card-title">
                        <font-awesome-icon size="xs" icon="pen" /> Upload a Waiver</h5>
                    <ol v-if="active==4">
                        <li>Paste in your waiver (.docs or .text).</li>
                        <li>Move your mouse to where the initials field should be on the waiver.</li>
                        <li>Type in <a class="btn btn-dark" href="#" role="button">@initials</a></li>
                        <li>Move your mouse to where the signature field should be on the waiver.</li>
                        <li>Type in <a class="btn btn-dark" href="#" role="button">@signature</a></li>
                    </ol>
                    <a class="btn btn-forward" href="/admin/rental-types/1/edit" target="_blank" role="button">
                        <font-awesome-icon size="xs" icon="external-link-alt" /> Waivers</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Page5',
        components: {},
        data: function() {
            return {
                //the active card
                active: 5
            }
        },
        computed: {
            domain: function () {
                return window.location.host
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .closed:hover {
        cursor: pointer;
        background-color: #F8F8F8;
    }

    .btn-dark {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-left: 0.25rem !important;
        padding-right: 0.25rem !important;
    }

    .btn-forward,
    .btn-forward:hover,
    .btn-forward:active,
    .btn-forward:visited {
        width: 10em;
        height: 2.3em;
        background-color: #44B6AE !important;
    }

    ol {
        line-height: 2em;
    }

    h5 {
        font-weight: bold;
    }

</style>
