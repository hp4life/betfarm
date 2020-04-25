<template>
    <div>
        <nav class="navbar navbar-light cus_header py-2">
            <div class="d-none-menu">
                <i class="large material-icons ">menu</i> A-Z
            </div>

            <a class="navbar-brand"> <img src="../../assets/betfarmlogo.png" alt="betfarm logo" /> </a>
            <form class="form-inline">
                <input class="form-control mr-sm-2 cus_input_w" type="search" placeholder="Search" aria-label="Search" style="background-color: #F7CB82;border: none">
                <i class="material-icons">search</i>
            </form>
            <div class="cus_d_none">
                <div  class="btn mr-5" style="background-color: #575353; color: #FFFFFF;width: 156px;">Book bet</div>
                <div  class="btn" style="background-color: #575353; color: #FFFFFF;width: 156px;">Bet slip ({{betSlipCount}})</div>
            </div>
            <div class="d-flex" style="align-items: center;justify-content: center">
                <button type="button" class="btn mr-3 cus-btn">Join Now</button>
                <button type="button" class="btn cus-btn" style="background-color:  #575353">Login</button>
            </div>
        </nav>
    </div>
</template>
<script lang="ts" src="./Header.ts"></script>
<style lang="scss" src="./Header.scss"></style>
