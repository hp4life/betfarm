<template>
<div style="background-color: #F3EAC6">
    <div style="background-color: #575353; height: 48px; display: flex; align-items: center">
        <span class="pl-3" style="color: white">foootball</span>
    </div>
    <div class="row">
        <div class="col">
            Match Result
        </div>
        <div class="col">
            Double Chance
        </div>
        <div class="col">
            Draw no bet
        </div>
        <div class="col">
            Match Result
        </div>

    </div>
    <div class="row" style="background-color: #F7CB82">
        <div class="col-6">
            European competition
        </div>
        <div class="col text-center">
            1
        </div>
        <div class="col text-center">
            x
        </div>
        <div class="col text-center">
            2
        </div>

    </div>
    <div class="row py-3 px-2" style="align-items: center">
        <div class="col-6">
            <div class="row">
                <div class="col">Nigeria</div>
                <div class="col">1</div>
            </div>
            <div class="row">
                <div class="col">Ghanna</div>
                <div class="col">0</div>
            </div>
            <div class="row">
                <div class="col">first half 35</div>
                <div class="col">x</div>
            </div>

        </div>
            <div class="col text-center" style="background-color: #F7CB82; border-right: 2px solid white">
                216
            </div>
            <div class="col text-center" style="background-color: #F7CB82;border-right: 2px solid white">
                216
            </div>
            <div class="col text-center" style="background-color: #F7CB82;border-right: 2px solid white">
                216
            </div>
    </div>
    <div class="row py-3 px-2" style="align-items: center">
        <div class="col-6">
            <div class="row">
                <div class="col">Nigeria</div>
                <div class="col">1</div>
            </div>
            <div class="row">
                <div class="col">Ghanna</div>
                <div class="col">0</div>
            </div>
            <div class="row">
                <div class="col">first half 35</div>
                <div class="col">x</div>
            </div>

        </div>
        <div class="col text-center" style="background-color: #F7CB82;height: 100%; border-right: 2px solid white">
            216
        </div>
        <div class="col text-center" style="background-color: #F7CB82;border-right: 2px solid white">
            216
        </div>
        <div class="col text-center" style="background-color: #F7CB82;border-right: 2px solid white">
            216
        </div>
    </div>
    <div class="row py-3 px-2" style="align-items: center">
        <div class="col-6">
            <div class="row">
                <div class="col">Nigeria</div>
                <div class="col">1</div>
            </div>
            <div class="row">
                <div class="col">Ghanna</div>
                <div class="col">0</div>
            </div>
            <div class="row">
                <div class="col">first half 35</div>
                <div class="col">x</div>
            </div>

        </div>
        <div class="col text-center" style="background-color: #F7CB82;border-right: 2px solid white">
            216
        </div>
        <div class="col text-center" style="background-color: #F7CB82;border-right: 2px solid white">
            216
        </div>
        <div class="col text-center" style="background-color: #F7CB82;border-right: 2px solid white">
            216
        </div>
    </div>


</div>

</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Football extends Vue {
        @Prop() private msg!: string;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .cus_header {
        background-color: #F7CB82;
        color: black;
    }
    h3 {
        margin: 40px 0 0;
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
