<template>
    <div class="page4">
        <label>The following settings cannot be changed in the wizard. Navigate to the rentrax control panel and follow the instructions.</label>

        <br>
        <br>
        <ol>

            <li>Begin from the <a class="btn btn-dark" href="/admin/dashboard" role="button">
                    <font-awesome-icon size="xs" icon="home"></font-awesome-icon> Dashboard
                </a></li>
            <li>Click on <a class="btn btn-dark" href="/admin/rental-types" role="button">
                    <font-awesome-icon size="xs" icon="cogs"></font-awesome-icon>
                    Activity Settings </a>, then click <a class="btn btn-dark" href="#" role="button">
                        <font-awesome-icon size="xs" icon="cog"></font-awesome-icon>
                        settings
                    </a> on one of the activities.
               </li>
            <li>Navigate to <a class="btn btn-dark" href="#" role="button">
                    <font-awesome-icon size="xs" icon="pen"></font-awesome-icon> {{Sign_Tab_Name}}
                </a></li>
            <li>Paste in your waiver (.docs or .text). Feel free to press <a class="btn btn-dark" href="#" role="button">></a> in the wizard if you don't have it on hand.</li>
            <li>Move your mouse to where the initials field should be on the waiver.</li>
            <li>Type in <a class="btn btn-dark" href="#" role="button">@initials</a></li>
            <li>Move your mouse to where the signature field should be on the waiver.</li>
            <li>Type in <a class="btn btn-dark" href="#" role="button">@signature</a></li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'Page4',
        components: {},
        computed: {
            Sign_Tab_Name: function() {
                if (this.$root.$children[0].pages[1].fields.waiver.current === "enhanced_waiver") {
                    return "Enhanced Waiver"
                } else {
                    return "Terms and Conditions"
                }
            }
        }


    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page4 {}

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
