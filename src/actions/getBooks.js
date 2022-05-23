import axios from "axios";
import { useDispatch } from "react-redux";
import setBooks from '../reducers/booksSearchReducer'

export default function getBooks() {
    return async function(dispatch) {
        const response = await axios.get('http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2')
        dispatch(setBooks(response.docs))
    }
}