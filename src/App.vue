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
                        <h5 class="modal-title" id="exampleModalLabel">Setup</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="close_modal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-auto no-gutters">
                                    <Progress v-on:goto="goto"></Progress>
                                </div>
                                <div class="col page">
                                    <Page></Page>
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
                pages: [{
                        name: "Business Settings",
                        options: {
                            opening: "",
                            closing: "",
                            closing_this_season: false
                        }
                    },
                    {
                        name: "Activity Settings",
                        options: {
                            auto_create_invoice: true,
                            address_required: false,
                            //sign_box if false, advanced waiver if true
                            customer_input: 0,
                            waiver: 0,
                            //when doing inventory checks
                            consider_size: true,
                            //allow customers to see availibility calendar
                            avail_cal: true,
                            //typo?
                            reorder: true,
                            //per piece of equipment
                            multi_participant: 1
                        }
                    },
                    {
                        name: "Payment",
                        options: {
                            //0 full amount, 1 deposit, 2 delay payment
                            credit_card: {
                                online: 0,
                                walk_in: 0,
                                backend: 0,
                                phone: 0
                            },
                            delay_payment: {
                                backend: true,
                                walk_in: true
                            }
                        }
                    },
                    {
                        name: "Terms and conditions",
                        options: {
                            waiver: ""
                            //fields?
                        }
                    },
                    {
                        name: "Subcategories",
                        //static link and images, no data
                        options: null

                    },
                    {
                        name: "Pricing",
                        options: null

                    },
                    {
                        name: "Booking",
                        options: null
                    }
                ]
            }
        }

    }

</script>

<style>
    .no-gutters {
        margin-right: 0;
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
        background-color: #F8F8F8;
    }

</style>
