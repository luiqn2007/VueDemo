import { createStore } from 'vuex'
import { INCREMENT, INCREMENT_BY } from '@/mutations'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    [INCREMENT](state) {
      state.count++
    },
    [INCREMENT_BY](state, amount) {
      state.count += amount
    }
  },
  actions: {
    increment(context) {
      context.commit(INCREMENT)
    },
    incrementBy(context, amount) {
      context.commit(INCREMENT, amount)
    }
  }
})
