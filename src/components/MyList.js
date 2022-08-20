import "../css/MyList.css";
import { useContext, useState ,useEffect} from "react";
import PropTypes from 'prop-types';
// ---------------API------------------
import { ApiListBooks } from "./MyContextAPI";
import * as BooksAPI from "../BooksAPI";


function ListOfBooks(props) {
    const [bookState, setBookState] = useState(props.bookOBJ.shelf)
    const books = useContext(ApiListBooks);
    useEffect(() => {
        BooksAPI.get(props.bookOBJ.id).then((book) => {
            setBookState(book.shelf);
        });
    }, [props.bookOBJ.id]);
    const changeBookShelf = (event) => {
        let newBookStatus = event.target.value;
        BooksAPI.update(props.bookOBJ, newBookStatus).then((b) => {
            setBookState(newBookStatus);
            BooksAPI.getAll().then((newBooksList) => {
                books.setAllBooks(newBooksList);
            });
        });
    }
    return (
        <div className="list">
            <select onChange={changeBookShelf} value={bookState}>
                <option disabled> Move To</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}
ListOfBooks.propTypes={
    bookOBJ: PropTypes.object.isRequired,
}
export default ListOfBooks;
