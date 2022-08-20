// import "./App.css";
import MySearch from "./components/MySearch";
import MyHome from "./components/MyHome";
import DetailsOfBook from "./components/MyDetail";
// ---------------API------------------
import { ApiListBooks } from "./components/MyContextAPI";
import * as BooksAPI from "./BooksAPI";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  let [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setAllBooks(books);
    });
  }, []);

  return (
    <div className="app">
      {/* API---Context provides a way to pass data through the component tree */}
      <ApiListBooks.Provider value={{ allBooks, setAllBooks }}>
        <Routes>
          <Route exact path="/" element={<MyHome />} />
          <Route exact path="search" element={<MySearch />} />
          <Route exact path="book/:id" element={<DetailsOfBook />} />
        </Routes>
      </ApiListBooks.Provider>
    </div>
  );
}

export default App;
