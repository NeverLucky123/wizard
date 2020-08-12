<template>
    <div class="page4">
        <label>The following settings cannot be changed in the wizard. Navigate to the rentrax control panel and follow the instructions.</label>

        <br>
        <br>
        <ol>
            <li>Begin from the <kbd>
                    <font-awesome-icon size="xs" icon="home"></font-awesome-icon> Dashboard
                </kbd></li>
            <li>Click on <kbd>
                    <font-awesome-icon size="xs" icon="cogs"></font-awesome-icon>
                    Activity Settings
                </kbd></li>
            <li>Navigate to <kbd>
                    <font-awesome-icon size="xs" icon="pen"></font-awesome-icon> {{Sign_Tab_Name}}
                </kbd></li>
            <li>Paste in your waiver (.docs or .text). Feel free to press <kbd>></kbd> in the wizard if you don't have it on hand.</li>
            <li>Move your mouse to where the initials field should be on the waiver.</li>
            <li>Type in <kbd>@whatever macro intial is, ask Al</kbd></li>
            <li>Move your mouse to where the signature field should be on the waiver.</li>
            <li>Type in <kbd>@full_name</kbd></li>
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

    ol {
        line-height: 2em;
    }

    label {
        font-weight: bold;
    }

</style>
