import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import booksSearchReducer from './booksSearchReducer'

const rootReducer = combineReducers({
    search: booksSearchReducer
})

const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)))