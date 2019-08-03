import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import app from './_reducers/app.reducer'
import auth from './_reducers/auth.reducer'

const store = createStore(
    combineReducers({
        app,
        auth,
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store