<template>
    <div class="Progress">
        <div class="container-fluid">
            <div class="row">
                <span class="col-4 align-self-center">
                    <div class="node" v-bind:class="{active:this.a==1}">1</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label" v-bind:class="{active_label:this.a==1}">Business Settings</div>
                </span>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col-4 align-self-center">
                    <div class="node" v-bind:class="{active:this.a==2}">2</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label" v-bind:class="{active_label:this.a==2}">Activity Settings
                    </div>
                </span>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col-4 align-self-center">
                    <div class="node" v-bind:class="{active:this.a==3}">3</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label" v-bind:class="{active_label:this.a==3}">Terms and conditions
                    </div>
                </span>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col-4 align-self-center">
                    <div class="node" v-bind:class="{active:this.a==4}">4</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label" v-bind:class="{active_label:this.a==4}">Subcategories</div>
                </span>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col-4 align-self-center">
                    <div class="node" v-bind:class="{active:this.a==5}">5</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label" v-bind:class="{active_label:this.a==5}">Pricing</div>
                </span>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col-4 align-self-center">
                    <div class="node" v-bind:class="{active:this.a==6}">6</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label" v-bind:class="{active_label:this.a==6}">Booking</div>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Progress',
        methods: {
            next: function() {
                this.a = this.a + 1
                if(this.a>6){
                    this.a=6;
                }
            }
        },
        data: function() {
            return {
                a: 1
            }
        },
        computed: {

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Progress {
        color: #9C9C9C;
        background-color: #FFFFFF;
        height: 100%;
    }

    .node_label {
        text-align: center;
    }


    .node {
        color: #9C9C9C;
        margin: auto;
        line-height: 50px;
        text-align: center;
        height: 50px;
        width: 50px;
        background-color: #EBEBEB;
        border-radius: 50%;
    }

    .active {
        color: white;
        background-color: #4966B1;
    }

    .active_label {
        color: #4966B1;
        background-color: transparent;
    }

    .node_link {
        margin: auto;
        height: 40px;
        width: 3px;
        background-color: #EBEBEB;
    }

</style>
