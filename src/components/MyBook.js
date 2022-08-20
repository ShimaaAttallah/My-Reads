import "../css/MyBook.css";
import PropTypes from "prop-types";
import MyBooks from "./MyBooks";

function MyBook(props) {
  const books = props.booksList;
  return (
    <div className="book1">
      <h2>{props.title}</h2>
      <div className="book2">
        <ol className="books">
          {books.map((book) => {
            if (book.shelf === props.shelfName) {
              return (
                <li key={book.id}>
                  <MyBooks
                    changeBookShelf={props.changeBookShelf}
                    bookOBJ={book}
                  />
                </li>
              );
            } else {
              return [];
            }
          })}
        </ol>
      </div>
    </div>
  );
}
MyBook.propTypes = {
  booksList: PropTypes.array.isRequired,
};
export default MyBook;
