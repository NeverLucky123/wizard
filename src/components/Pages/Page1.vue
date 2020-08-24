<template>
    <div class="Page1">
        <br>
        <h4>Welcome to the Rentrax Setup Wizard</h4>
        <br>
        <hr />
        <p>This will allow you to configure your business, activity, and order settings so you can begin using Rentrax.</p>
        <p>The wizard is split between simple and advanced settings. Press <font-awesome-icon size="lg" icon="chevron-circle-up"></font-awesome-icon> to toggle to advanced settings.
        </p>
        <p>Press <font-awesome-icon size="lg" icon="save"></font-awesome-icon> to save your progress and come back later.
        </p>
        <p>Use <font-awesome-icon size="lg" icon="chevron-right"></font-awesome-icon> to advance the page</p>

    </div>
</template>

<script>
    export default {
        name: 'Page1'
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Page1 {
        line-height: 2em;
        margin-top: 1em;
    }

    p {
        margin: 2em;
        font-size: 18px;
    }

    h4 {
        font-weight: bold;
        text-align: center
    }

</style>
