<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-auto">
                    <Progress></Progress>
                </div>
                <div class="col">
                    <HelloWorld></HelloWorld>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Progress from './components/Progress.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld,
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
        background-color: beige;
    }

</style>
