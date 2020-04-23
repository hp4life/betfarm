<template>
    <div class="container-fluid py-3" style="background-color: #F3EAC6">
        <div class="row">
            <div class="col">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: red">
                </div>
                <router-link to="/">Football</router-link>
            </div>
            <div class="col">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: red">
                </div>
                <router-link to="/tennis">Tennis</router-link>
            </div>
            <div class="col">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: red"></div>
                <router-link to="/basketball">Basketball</router-link>
            </div>
            <div class="col">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: red"></div>
                <router-link to="/volleyball">Volleyball</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class SecondaryHeader extends Vue {
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
