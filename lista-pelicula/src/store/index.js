import { createStore } from 'vuex'

export default createStore({
  state: {
    movies: [
      { id: 1, title: 'Ted', genre: 'Comedy' },
      { id: 2, title: 'Guerra de Novias', genre: 'Comedy' },
      { id: 3, title: '¿Qué pasó ayer?', genre: 'Comedy' },
      { id: 4, title: 'La propuesta', genre: 'Comedy' },
      { id: 5, title: 'American Pie', genre: 'Comedy' },
      { id: 6, title: 'El club de las madres rebeldes', genre: 'Comedy' },
      { id: 7, title: 'Zoolander', genre: 'Comedy' },
      { id: 8, title: 'Kung Fu Sion', genre: 'Comedy' },
      { id: 9, title: '¿Por qué él?', genre: 'Comedy' },
      { id: 10, title: 'Quiero matar a mi jefe', genre: 'Comedy' },

      { id: 11, title: 'Cars', genre: 'Family' },
      { id: 12, title: 'Toy Story', genre: 'Family' },
      { id: 13, title: 'Harry Potter', genre: 'Family' },
      { id: 14, title: 'Malefica', genre: 'Family' },
      { id: 15, title: 'Spider-Man', genre: 'Family' },
      { id: 16, title: 'Mas barato por Docena', genre: 'Family' },
      { id: 17, title: 'buscando a nemo', genre: 'Family' },
      { id: 18, title: 'Indiana Jones', genre: 'Family' },
      { id: 19, title: 'La vida es Bella', genre: 'Family' },
      { id: 20, title: 'Paddington', genre: 'Family' },
      
      { id: 21, title: 'Logan', genre: 'Action' },
      { id: 22, title: 'Star Wars', genre: 'Action' },
      { id: 23, title: 'John Wick', genre: 'Action' },
      { id: 24, title: 'The Avengers', genre: 'Action' },
      { id: 25, title: 'El Origen', genre: 'Action' },
      { id: 26, title: 'Rapidos y Furiosos', genre: 'Action' },
      { id: 27, title: '007', genre: 'Action' },
      { id: 28, title: 'Mad Max', genre: 'Action' },
      { id: 29, title: '47 Ronin', genre: 'Action' },
      { id: 30, title: 'Terminator', genre: 'Action' },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
