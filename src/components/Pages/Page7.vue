<template>
    <div class="page7">
        <label>The following settings cannot be changed in the wizard. Navigate to the rentrax control panel and follow the instructions.</label>

        <br>
        <br>
        <ol>
            <li>Click <kbd>
                    <font-awesome-icon size="xs" icon="calendar-alt" /> Rent Orders</kbd> from the top row</li>
            <li>Click <kbd>
                    <font-awesome-icon size="xs" icon="plus-circle" /> Reservation</kbd>
                <ul>
                    <li>Set the <kbd>Rental Period</kbd></li>
                    <li>Enter the test information in <kbd>Customer Info</kbd></li>
                    <li>Select "E-Bikes", which was just created</li>
                    <li>Click <kbd>CHECKOUT</kbd></li>
                </ul>
            </li>
            <li>Sign the waiver</li>
            <li>Enter <kbd>411111111</kbd> <kbd>04/21</kbd> and <kbd>111</kbd> for payment info
            </li>
            <li>Pay full amount</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'Page7'
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page7 {}

    ol {
        line-height: 2em;
    }

    label {
        font-weight: bold;
    }

</style>
