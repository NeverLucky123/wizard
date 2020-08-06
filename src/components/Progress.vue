<template>
    <div class="Progress">
        <div class="container-fluid">
            <div class="row">
                <span class="col align-self-center">
                    <div class="node active">1</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label active_label">Business Settings</div>
                </span>
            </div>
            <div class="row">
                <div class="col">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col align-self-center">
                    <div class="node">2</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label">Activity Settings
                    </div>
                </span>
            </div>
            <div class="row">
                <div class="col">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col align-self-center">
                    <div class="node">3</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label">Terms and conditions
                    </div>
                </span>
            </div>
            <div class="row">
                <div class="col">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col align-self-center">
                    <div class="node">4</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label">Subcategories</div>
                </span>
            </div>
            <div class="row">
                <div class="col">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col align-self-center">
                    <div class="node">5</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label">Pricing</div>
                </span>
            </div>
            <div class="row">
                <div class="col">
                    <div class="node_link"></div>
                </div>
                <div class="col"></div>

            </div>
        </div>
        <div class="container">
            <div class="row">
                <span class="col align-self-center">
                    <div class="node">6</div>
                </span>
                <span class="col align-self-center">
                    <div class="node_label">Booking</div>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Progress'
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Progress {
        color: #9C9C9C;
        padding: 2em;
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
