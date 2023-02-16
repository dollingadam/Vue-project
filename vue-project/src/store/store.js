import { createStore } from 'vuex'


const state = {
    counter: 1997
}
const mutations = {
    increase(state) {
        state.counter++
    }
}



export default createStore({mutations, state, strict: true})
