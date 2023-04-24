import dataSave from "./reducer";
import Image from './Image'
import addProduct from './addProduct'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    dataSave,
    Image,
    addProduct
})

export default rootReducer