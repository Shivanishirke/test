import React, { useReducer } from 'react';
import Counter from './Components/Counter';
import Display from './Components/Display';

function reducer(state, action) {
    let newState ;
    switch(action.type){
      case "increase":
        newState = { count : state.count + 1};
        break;
        default :
        break;
    }
    return newState
}


function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0});
 
 const handleCount = () => {
    dispatch({ type : "increase"})
 }
 console.log(state)

  return (
    
    <div>
    <Display count={state.count}/>
    <Counter setCount={handleCount}/>
    </div>
        
   
  );
}

export default App;
