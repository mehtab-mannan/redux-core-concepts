// productreducer

const { createStore, combineReducers } = require('redux');

// declare product constant-------------------
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
// declare cart constant-------------------
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEMS = 'ADD_ART_ITEMS';
// declare state FOR cart
const initialCartState = {
    cart: ['greenchili'],
    cartNumber: 1,
};
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
// declare action for cart--------------
const getCarts = () => {
    return {
        type:GET_CART_ITEMS,
    }
};
const addCart = (cart) => {
    return {
        type: ADD_CART_ITEMS,
        payload:cart
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
// declare reducer for cart--------------
const cartReducer = ((state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
            }
        case ADD_CART_ITEMS:
            return {
                cartName: [...state.cart, action.payload],
                cartNumber:state.cartNumber+1
            }
        default:
            return state
        
    }
});
// combine reduceer----------------------------
const rootReducer = combineReducers({
    productRedu: productReducer,
    cartRedu:cartReducer
})
// product store-------------------
const productStore = createStore(rootReducer);
productStore.subscribe(() => {
    console.log(productStore.getState())
});
productStore.dispatch(getProducts())
productStore.dispatch(addProduct('oil'))
productStore.dispatch(getCarts())
productStore.dispatch(addCart('keyboard'))


// cart store --------------------------
// const cartStore = createStore(cartReducer);
// cartStore.subscribe(() => {
//     console.log(cartStore.getState())
// });
// cartStore.dispatch(getCarts())
// cartStore.dispatch(addCart('mouse'))