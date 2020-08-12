<template>
    <div class="page6">
        <label>The following settings cannot be changed in the wizard. Navigate to the rentrax control panel and follow the instructions.</label>

        <br>
        <br>
        <ol>
            <li>Lets create a new pricing tier for the subcategory you just created.</li>
            <li>Begin from the <a class="btn btn-dark" href="/admin/dashboard" target="_blank" role="button">
                    <font-awesome-icon size="xs" icon="home"></font-awesome-icon> Dashboard
                </a></li>
            <li>Hover over <a class="btn btn-dark" href="#" role="button">
                    <font-awesome-icon size="xs" icon="cog" /> Configurations</a>
                on the the side bar</li> and click <a class="btn btn-dark" href="/admin/prices" target="_blank" role="button">
                <font-awesome-icon size="xs" icon="calculator" /> Price Settings</a>
            <li>Scroll to the bottom of the page and click <a class="btn btn-dark" href="#" target="_blank" role="button">+ New xxxx Pricing</a></li>
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
    </div>
</template>

<script>
    export default {
        name: 'Page6'
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page6 {}
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
