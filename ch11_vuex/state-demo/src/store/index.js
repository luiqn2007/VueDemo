import { createStore } from 'vuex'

export default createStore({
  state: {
    BISBN: '97873025985036',
    bookPrice: 99.8,
    bookPress: '清华大学出版社',
    bookAuthor: '陈恒',
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
})
