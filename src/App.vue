<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-auto">
                    <Progress></Progress>
                </div>
                <div class="col page">
                    <Page1></Page1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Page1 from './components/Page1.vue'
    import Progress from './components/Progress.vue'

    export default {
        name: 'App',
        components: {
            Page1,
            Progress
        }
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .page{
        background-color: #F8F8F8;
    }

</style>
