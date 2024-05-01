import {configureStore} from '@reduxjs/toolkit'
import userReducer from './UserSlice'
const Store = configureStore(

    {
        reducer:{
            usersss:userReducer
        },
    }
)

export default Store