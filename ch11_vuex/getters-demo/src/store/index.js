import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ],
    BISBN: '97873025985036',
    bookPrice: 99.8,
    bookPress: '清华大学出版社',
    bookAuthor: '陈恒',
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById(state) {
      return id => state.todos.find(todo => todo.id === id)
    },
    getBookPrice(state) {
      return state.bookPrice
    },
    getThreeBookPrice(state, getters) {
      return state.bookPrice + getters.getBookPrice * 2
    },
    getManyBookPrice(state) {
      return count => state.bookPrice * count
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
