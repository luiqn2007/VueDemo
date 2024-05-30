import { createStore } from 'vuex'

export default createStore({
  state: {
    bookAuthor: '陈恒',
    BISBN: '97873025985036',
    bookPrice: 99.8,
    bookPress: '清华大学出版社',
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
})
