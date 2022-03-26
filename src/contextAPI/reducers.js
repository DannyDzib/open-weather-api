const initialState = {
    homme:null
  }
  
 const combineReducers = (reducers) => {  
    return (state = {}, action) => {
      const newState = {};
      for (let key in reducers) {
        newState[key] = reducers[key](state[key],   
          );
      }
      return newState;
    }
  }
  

export { initialState, combineReducers }

