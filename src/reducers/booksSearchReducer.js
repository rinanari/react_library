const SET_BOOKS = 'SET_BOOKS'

defaultState = {
    docs: [],
    
}

export default function booksSearchReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                docs: action.payload.docs

            }
           
    
        default:
            return state
    }
}

export default function setBooks(SET_BOOKS, books) {
     return { type: SET_BOOKS, payload: books}
}