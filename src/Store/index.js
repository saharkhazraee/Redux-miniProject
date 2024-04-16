import {configureStore} from '@reduxjs/toolkit'
import authReducer from './Slices/Auth'
import cartReducer from './Slices/Cart'
const store=configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer
    }
})
export default store