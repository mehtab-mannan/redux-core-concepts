// using createStore to store data and 'applyMiddleware' to connect middleware and getting all information---------------------

const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

// declare product constant-------------------
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';

// declare state FOR product
const initialProductState = {
    products: ['sugar'],
    productsNumber: 1,
};

// declare action for product--------------
const getProducts = () => {
    return {
        type: GET_PRODUCT,
    }
};
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload:product
    }
};

// declare reducer for product--------------
const productReducer = ((state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                productsName: [...state.products, action.payload],
                productsNumber:state.productsNumber+1
            }
        default:
           return state
        
    }
});
// product store-------------------
const productStore = createStore(productReducer,applyMiddleware(logger));
productStore.subscribe(() => {
    console.log(productStore.getState())
});
// productStore.dispatch(getProducts())
productStore.dispatch(addProduct('oil'))