<template>
    <div class="page5">
        <label>The following settings cannot be changed in the wizard. Navigate to the rentrax control panel and follow the instructions.</label>
        <br>
        <br>
        <ol>
            <li>Begin from the <a class="btn btn-dark" href="/admin/dashboard" role="button">
                    <font-awesome-icon size="xs" icon="home"></font-awesome-icon> Dashboard
                </a></li>
            <li>Click on <a class="btn btn-dark" href="/admin/products/categories" role="button">
                    <font-awesome-icon size="xs" icon="sitemap"></font-awesome-icon> Categories
                </a></li>
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
            <li>Press <a class="btn btn-dark" href="#" role="button">
                    <font-awesome-icon size="xs" icon="save"></font-awesome-icon>
                    Save
                </a> </li>
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

    .btn-dark {
        font-size: 14 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-left: 0.25rem !important;
        padding-right: 0.25rem !important;
    }

    ol {
        line-height: 2em;
    }

    label {
        font-weight: bold;
    }

</style>
