
// reducers = { "Sub-state name (property in state)": "reducer *name* of that sub-state" }

export function combineReducers(reducers){

  let masterReducer = (state = {}, action) => {
    let subStateNames = Object.keys(reducers)
    let subStatesReducers = subStateNames.reduce(
      (subStatesReducers, subStateName) => {
        //nextState[key] = reducers[key](state[key], action);
        let subState = state[subStateName]
        let subStateReducer = reducers[subStateName]
        subStatesReducers[subStateName] = subStateReducer(subState, action);
        return subStatesReducers
      },
      {}  // Initial value of the subStatesReducers { "Sub-state name": "reducer *function* of that sub-state" }
    )
    return subStatesReducers
  }

  return masterReducer
}

// Or just use...
//import { combineReducers } from 'redux'
//
//const rootReducer = combineReducers({books, recommendedBooks})


// Original code...
// export function combineReducers(reducers){
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce(
//       (nextState, key)=>{
//         nextState[key] = reducers[key](state[key], action);
//         return nextState
//       }, {}
//     )
//   }
// }
