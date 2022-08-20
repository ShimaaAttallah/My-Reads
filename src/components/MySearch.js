import "../css/MySearch.css";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Book from "./MyBooks";
// ---------------API------------------
import * as BooksAPI from "../BooksAPI";


const MySearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchBooks, setSearchBooks] = useState([]);
    useEffect(() => {
        if (searchQuery !== '') {
            BooksAPI.search(searchQuery, 15).then((books) => {
                if (Array.isArray(books)) {
                    setSearchBooks(books);
                } else {
                    setSearchBooks([]);
                }
            }).catch(() => setSearchBooks([]));
        } else {
            setSearchBooks([]);
        }
    }, [searchQuery]);
    
    function SearchInfo() {
        if (searchBooks.length === 0 || searchBooks === 'undefined' || !Array.isArray(searchBooks)) {
            return <h1 id= "search">Search To Show Books</h1>
        } else {
            return searchBooks.map((book) => {
                book['shelf'] = 'none';
                return <li key={book.id}><Book bookOBJ={book}/></li>
            })
        }
    }
    return (
            <div className="search-books">
                <div className="search2">
                    <Link className="back" to="/">Back</Link>
                    <div className="search3">
                        <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    </div>
                </div>
                <div className="searchshow">
                    <ol className="books">{SearchInfo()}</ol>
                </div>
            </div>
    );
}

export default MySearch;
