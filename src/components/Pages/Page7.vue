<template>
    <div class="page7">
        <label>The following settings cannot be changed in the wizard. Navigate to the rentrax control panel and follow the instructions.</label>

        <br>
        <br>
        <ol>
            <li>Click <a class="btn btn-dark" href="/admin/orders/rents" target="_blank" role="button">
                    <font-awesome-icon size="xs" icon="calendar-alt" /> Rent Orders</a></li>
            <li>Click <a class="btn btn-dark" href="/reservations/1?source=back_end" target="_blank" role="button">
                    <font-awesome-icon size="xs" icon="plus-circle" /> Reservation</a>
                <ul>
                    <li>Set the <a class="btn btn-dark" href="#" role="button">Rental Period</a></li>
                    <li>Enter the test information in <a class="btn btn-dark" href="#" role="button">Customer Info</a></li>
                    <li>Select "E-Bikes", which was just created</li>
                    <li>Click <a class="btn btn-dark" href="#" role="button">CHECKOUT</a></li>
                </ul>
            </li>
            <li>Sign the waiver</li>
            <li>Enter <a class="btn btn-dark" href="#" role="button">411111111</a>, <a class="btn btn-dark" href="#" role="button">04/21</a> and <a class="btn btn-dark" href="#" role="button">111</a> for payment info
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
