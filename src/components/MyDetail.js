import "../css/MyDetail.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// ---------------API------------------
import * as BooksAPI from "../BooksAPI";


function DetailsOfBook(props) {
  const bookID = useParams();
  console.log("Book ID: ", bookID);
  const [bookOBJ, setBookOBJ] = useState({});
  useEffect(() => {
    BooksAPI.get(bookID.id).then((book) => {
      setBookOBJ((bookOBJ) => (bookOBJ = { ...bookOBJ, ...book }));
    });
  }, [bookID.id]);
  console.log("Book : ", bookOBJ);
  let image =
    bookOBJ.imageLinks !== null && bookOBJ.imageLinks !== undefined
      ? bookOBJ.imageLinks.thumbnail
      : "";
  return (
    <>
      <Link className="back" placeholder="Back" to="/">Back</Link>
      <div id="detail">
        <div id="image">
          <img src={image} alt="Book"/>
        </div>
        <div id="books">
          <h1>{bookOBJ.title}</h1>
          <h2>By {bookOBJ.authors != null ? bookOBJ.authors.join(" and ") : ""}</h2>
          <div id="button">
            <h5 className="buttoninside">Page Count  {bookOBJ.pageCount}</h5>
            <h5 className="buttoninside">Publish Date  {bookOBJ.publishedDate}</h5>
            <h5 className="buttoninside">Publisher  {bookOBJ.publisher}</h5>
            <h5 className="buttoninside">Category {" "} {bookOBJ.categories != null ? bookOBJ.categories.join(",") : ""}</h5>
          </div>
          <p>{bookOBJ.description}</p>
        </div>
      </div>
    </>
  );
}
export default DetailsOfBook;
