import {FootballData} from '@/constant/footballData'
// import data from "../../constant/data";

export default {
    namespaced: true,
    state: {
       footballData: null,
        betSlipCount: 0
    },


    actions: {
        getFootball({commit}) {
            commit('setFootballData')
        },

        getIncrement({commit}) {
            commit('setIncrement')
        },

        getDecrement({commit}) {
            commit('setDecrement')
        }
    },

    mutations: {
        setFootballData(state) {
            state.footballData = FootballData.data.data.sport["1"].region["20001"].competition["18273920"]
        },

        setIncrement(state) {
            state.betSlipCount = state.betSlipCount + 1
        },

        setDecrement(state) {
            state.betSlipCount = state.betSlipCount - 1
        }
    }
}
