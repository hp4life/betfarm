<template>
    <div class="py-3" style="background-color: #F3EAC6;">
        <div class="row">
            <div class="col-3" style="display: flex; flex-direction: column; align-items: center;justify-content: center">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: #575353" class="isActive">
                </div>
                <router-link style="color:  #000000; text-decoration: none" to="/">Football</router-link>
            </div>
            <div class="col-3" style="display: flex; flex-direction: column; align-items: center;justify-content: center">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: #F7CB82">
                </div>
                <router-link style="color:  #000000; text-decoration: none" to="/tennis">Tennis</router-link>
            </div>
            <div class="col-3" style="display: flex; flex-direction: column; align-items: center;justify-content: center">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: #F7CB82"></div>
                <router-link style="color:  #000000; text-decoration: none" to="/basketball">Basketball</router-link>
            </div>
            <div class="col-3" style="display: flex; flex-direction: column; align-items: center;justify-content: center">
                <div style="width: 50px; height: 50px; border-radius: 50%; background-color: #F7CB82"></div>
                <router-link style="color:  #000000; text-decoration: none" to="/volleyball">Volleyball</router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./SecondaryHeader.ts"></script>
<style lang="scss" src="./SecondaryHeader.scss"></style>
