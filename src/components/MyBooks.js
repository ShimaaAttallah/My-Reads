import "../css/MyBooks.css";
import PropTypes from 'prop-types';
import ListOfBooks from "./MyList";
import { Link } from "react-router-dom";


function MyBooks(props) {
    let imagebook = props.bookOBJ.imageLinks !== null && props.bookOBJ.imageLinks !== undefined ? props.bookOBJ.imageLinks.thumbnail : "";
    return (
        <div className="mybooks">
            <div className="mybook">
                <Link
                    to={`/book/${props.bookOBJ.id}`}
                    style={{width: 128, height: 193, backgroundImage:'url(' + imagebook + ')',}}></Link>
                <ListOfBooks bookOBJ={props.bookOBJ} />
            </div>
            <div id="title">{props.bookOBJ.title}</div>
            <div id="authors">{props.bookOBJ.authors != null ? props.bookOBJ.authors.join(" and ") : ""}</div>
        </div>
    );
}
MyBooks.propTypes={
    bookOBJ: PropTypes.object.isRequired,
}
export default MyBooks;
