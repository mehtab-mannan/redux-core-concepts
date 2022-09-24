const { createStore } = require('redux');

//declare constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const ADD_USER = 'ADD_USER';

// declare state for counter
const initialState = {
    user: ['name','sumaia',
    'profession','web developer',
    'age'],
    count: 1
};

// create action
const addUser = (value) => {
    return {
        type: ADD_USER,
        payload:value
    }
       
}
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
};
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
const resetCounter = () => {
    return {
        type: RESET
    }
}
// uses of payload--------------
const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload:value
    }        
}
// create reducer
const countReducer = ((state=initialState,action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user: [...state.user, action.payload],
                count:state.count+1
            }
        case INCREMENT:
            return {
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return {
                ...state,
                count:state.count-1
            }
        case RESET:
            return {
                ...state,
                count:0,
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count:state.count+action.payload,
            }
        default:
            state
            
    }
    
})
// create store
const store = createStore(countReducer);
store.subscribe(() => {
    console.log(store.getState())
});
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())
// store.dispatch(decrementCounter())
// store.dispatch(resetCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementByValue(5))
// store.dispatch(incrementByValue(5))
store.dispatch(addUser('shaheen'))


