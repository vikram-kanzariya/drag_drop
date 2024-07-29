import { state } from './state'
import { mutation } from './mutation'
import { getters } from './getters'
import { actions } from './actions'
import { createStore } from 'vuex'


const store = new createStore({
  state,
  mutation,
  getters,
  actions
});

export default store;