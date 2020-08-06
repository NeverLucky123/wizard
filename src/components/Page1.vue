<template>
    <div class="page1">
        <h3>Business Settings</h3>
        <form>
            <div class="form-group">
                <label for="formControlRange">Business hours</label>
                <form>
                    <div class="row">
                        <div class="col">
                            <input type="time" class="form-control">
                            <small id="passwordHelpBlock" class="form-text text-muted">
                                Opening time
                            </small>
                        </div>
                        <div class="col">
                            <input type="time" class="form-control">
                            <small id="passwordHelpBlock" class="form-text text-muted">
                                Closing time
                            </small>
                        </div>
                    </div>
                    <br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Closing this season</label>
                    </div>
                </form>
            </div>
        </form>
        <div style="height:230px;">
        </div>
        <PageNav></PageNav>
    </div>
</template>

<script>
    import PageNav from './PageNav.vue'

    export default {
        name: 'Page1',
        components: {
            PageNav
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    page1 {}

    .overlap {
        position: relative;
        bottom: 100%;
    }

    h3 {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
