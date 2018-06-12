import {types} from '../mutation-types'
import _ from 'lodash';

const state = {
    "userId": ""
}
const mutations = {
    [types['setUser']](state, payload) {
        state.userId = payload.userId;
    }
}

export default {
    state,
    mutations
}
