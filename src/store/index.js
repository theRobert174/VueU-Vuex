import { createStore } from 'vuex'
import getRandomInt from "../helpers/getRandomInt";


export default createStore({
    state: {
        count: 1,
        lastMutation: 'none'
    },
    mutations: {//methods
        increment(state){
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy(state, val){
            state.count+=val
            state.lastMutation = 'incrementBy' + val
        }
    },
    actions: {
        async incrementRandomInt(context){
            const randomint = await getRandomInt()

            context.commit('incrementBy',randomint)

        }
    }
})