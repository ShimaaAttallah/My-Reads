import "../css/MyHome.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Book from "./MyBook";
// ---------------API------------------
import { ApiListBooks } from "./MyContextAPI";

function MyHome() {
    const books = useContext(ApiListBooks);
    return (
            <div className="list-books">
                <div className="title">
                    <h1>My Reads</h1>
                </div>
                <div className="info">
                    <div>
                        <Book shelfName='currentlyReading' booksList={books.allBooks} title="Currently Reading" />
                        <Book shelfName='wantToRead' booksList={books.allBooks} title="Want to Read" />
                        <Book shelfName='read' booksList={books.allBooks} title="Read" />
                    </div>
                </div>
                <div className="search">
                    <Link to="/search">About</Link>
                </div>
            </div>
    );
}

export default MyHome;
