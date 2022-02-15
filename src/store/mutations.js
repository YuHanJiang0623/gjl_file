import TEST from './mutationTypes'


export default {
  // [] (state, {}) {}
    [TEST] (state, {name}) {
      state.name=name
    }
}