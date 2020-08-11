<template>
    <div class="page5">
        <label>The following settings cannot be changed in the wizard. Navigate to the rentrax control panel and follow the instructions.</label>
        <br>
        <br>
        <ol>
            <li>Begin from the <kbd>
                    <font-awesome-icon size="xs" icon="home"></font-awesome-icon> Dashboard
                </kbd></li>
            <li>Click on <kbd>
                    <font-awesome-icon size="xs" icon="sitemap"></font-awesome-icon> Categories
                </kbd></li>
            <li>Let's create a category called "Bikes". Click <kbd> +</kbd> on the <kbd>Rental Groups</kbd> bar. Input "Bikes" as the Group Name.
            </li>
            <li>Now we need to create a subcategory, like “Ebikes”.
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'Page5'
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page5 {}

    ol {
        line-height: 2em;
    }

    label {
        font-weight: bold;
    }

</style>
