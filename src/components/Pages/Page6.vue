<template>
    <div class="page6">
        <label>The following settings cannot be changed in the wizard. Navigate to the rentrax control panel and follow the instructions.</label>

        <br>
        <br>
        <ol>
            <li>Lets create a new pricing tier for the subcategory you just created.</li>
            <li>Begin from the <kbd>
                    <font-awesome-icon size="xs" icon="home"></font-awesome-icon> Dashboard
                </kbd></li>
            <li>Hover over <kbd>
                    <font-awesome-icon size="xs" icon="cog" /> Configurations</kbd>
                on the the side bar</li> and click <kbd>
                <font-awesome-icon size="xs" icon="calculator" /> Price Settings</kbd>
            <li>Scroll to the bottom of the page and click <kbd>+ New xxxx Pricing</kbd></li>
            <li>Put in "E-Bikes" for the template name
                <ul>
                    <li><kbd>
                            <font-awesome-icon size="xs" icon="pen" /> Edit</kbd> E-Bikes pricing.</li>
                    <li>Set <kbd>Pricing Model</kbd> to <kbd>Linear</kbd></li>
                    <li>Set <kbd>Duration Model</kbd> to <kbd>Integer Days</kbd> or <kbd>Integer Hours</kbd></li>
                </ul>
            </li>
            <li>Set <kbd>Stop Calc at Plan Finish</kbd> to <kbd>Enabled</kbd>
            </li>
            <li>Go to the <kbd>
                    <font-awesome-icon size="xs" icon="money-bill-alt" /> Price Table</kbd> tab
                    <ul>
                        <li>Let's set the first duration. Set the <kbd>Cost Type</kbd> to total (flat), and enter the amount for this range of time.
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
    ol {
        line-height: 2em;
    }
    label {
        font-weight: bold;
    }

</style>
