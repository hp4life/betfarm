<template>
<div class="pb-3" style="background-color: #F3EAC6">
    <div style="background-color: #575353; height: 48px; display: flex; align-items: center">
        <span class="pl-3" style="color: white">Foootball</span>
    </div>
    <div class="row  py-3">
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
    <div class="container-fluid">
    <div class="row py-2" style="background-color: #F7CB82">
        <div class="col-6">
            {{footballData.name}}
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
    </div>
    <div class="px-3">
    <div class="row py-3 px-2" style="align-items: center; border-bottom: 1px solid #DADADA">
        <div class="col-6">
            <div class="row py-1">
                <div class="col-8">{{footballData.game["16247433"].team1_name}}</div>
                <div class="col-4 text-center">{{footballData.game["16247433"].info.score1}}</div>
            </div>
            <div class="row py-1">
                <div class="col-8">{{footballData.game["16247433"].team2_name}}</div>
                <div class="col-4 text-center">{{footballData.game["16247433"].info.score2}}</div>
            </div>
            <div class="row py-1 ">
                <div class="col-8">{{footballData.game["16247433"].info.current_game_state}} {{footballData.game["16247433"].info.current_game_time}}</div>
                <div class="col-4 text-center"><i class="small material-icons">star</i></div>
            </div>

        </div>
            <div class="col text-center  py-3" v-bind:style= "[isClick1Col1 ? {background: '#575353', color: 'white'} : {background: '#F7CB82'} ]" style="background-color: #F7CB82; border-right: 2px solid white"
            @click="selected(1,1)">
                {{footballData.game["16247433"].market["421789833"].event["1370785214"].price}}
            </div>
            <div class="col text-center  py-3" v-bind:style= "[isClick2Col1 ? {background: '#575353', color: 'white'} : {background: '#F7CB82'}]" style="background-color: #F7CB82;border-right: 2px solid white"
                 @click="selected(1,2)">
                {{footballData.game["16247433"].market["421789833"].event["1370785213"].price}}
            </div>

            <div class="col text-center  py-3" v-bind:style= "[isClick3Col1 ? {background: '#575353', color: 'white'} : {background: '#F7CB82'}]" style="background-color: #F7CB82;"
                 @click="selected(1,3)">
                {{footballData.game["16247433"].market["421789833"].event["1370785211"].price}}
            </div>

    </div>
    <div class="row py-3 px-2" style="align-items: center; border-bottom: 1px solid #DADADA">
        <div class="col-6">
            <div class="row  py-1">
                <div class="col-8">{{footballData.game["16250119"].team1_name}}</div>
                <div class="col-4 text-center">{{footballData.game["16250119"].info.score1}}</div>
            </div>
            <div class="row  py-1">
                <div class="col-8">{{footballData.game["16250119"].team2_name}}</div>
                <div class="col-4 text-center">{{footballData.game["16250119"].info.score2}}</div>
            </div>
            <div class="row  py-1">
                <div class="col-8">{{footballData.game["16250119"].info.current_game_state}} {{footballData.game["16250119"].info.current_game_time}}</div>
                <div class="col-4 text-center"><i class="small material-icons">star</i></div>
            </div>

        </div>
        <div class="col text-center py-3"   v-bind:style= "[isClick1Col2 ? {background: '#575353', color: 'white'} : {background: '#F7CB82'} ]" style="background-color: #F7CB82;border-right: 2px solid white"
             @click="selected(2,1)">
            {{footballData.game["16250119"].market["422166141"].event["1371903639"].price}}
        </div>
        <div class="col text-center py-3"  v-bind:style= "[isClick2Col2 ? {background: '#575353', color: 'white'} : {background: '#F7CB82'} ]" style="background-color: #F7CB82;border-right: 2px solid white"
             @click="selected(2,2)">
            {{footballData.game["16250119"].market["422166141"].event["1371903638"].price}}
        </div>
        <div class="col text-center  py-3" v-bind:style= "[isClick3Col2 ? {background: '#575353', color: 'white'} : {background: '#F7CB82'} ]" style="background-color: #F7CB82;"
             @click="selected(2,3)">
            {{footballData.game["16250119"].market["422166141"].event["1371903637"].price}}
        </div>
    </div>
    <div class="row py-3 px-2" style="align-items: center; border-bottom: 1px solid #DADADA">
        <div class="col-6">
            <div class="row  py-1">
                <div class="col-8">Barcelona</div>
                <div class="col-4 text-center">3</div>
            </div>
            <div class="row py-1">
                <div class="col-8">Arsenal</div>
                <div class="col-4 text-center">0</div>
            </div>
            <div class="row py-1">
                <div class="col-8">first half 35</div>
                <div class="col-4 text-center"><i class="small material-icons">star</i></div>
            </div>

        </div>
        <div class="col text-center py-3" v-bind:style= "[isClick1Col3 ? {background: '#575353', color: 'white'} : {background: '#F7CB82'} ]" style="background-color: #F7CB82;border-right: 2px solid white"
             @click="selected(3,1)">
            1.1
        </div>
        <div class="col text-center py-3" v-bind:style= "[isClick2Col3 ? {background: '#575353', color: 'white'} : {background: '#F7CB82'} ]" style="background-color: #F7CB82;border-right: 2px solid white"
             @click="selected(3,2)">
            20
        </div>
        <div class="col text-center py-3" v-bind:style= "[isClick3Col3 ? {background: '#575353', color: 'white'} : {background: '#F7CB82'} ]" style="background-color: #F7CB82;"
             @click="selected(3,3)">
            50
        </div>
    </div>
    </div>
</div>
</template>
<script lang="ts" src="./Football.ts"></script>
<!--<style scoped lang="scss" src="Football.scss"></style>-->
