import React, { useState } from "react";
import { useFetchBooksQuery } from "../Domain/usescases/books/bookApiSlice";

function App() {
  const [numBooks, setNumBooks] = useState(10);

  const { data = [], isFetching } = useFetchBooksQuery(numBooks);
  return (
    <div className="App">
      <p>Books to fetch:</p>
      <select
        value={numBooks}
        onChange={(e) => setNumBooks(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <p> Numbers of books fetched: {data.length}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Publisher</th>
            <th>Number of pages</th>
          </tr>
        </thead>
        <tbody>
          {data.map((book, index) => (
            <tr key={index}>
              <td>{book.name}</td>
              <td>{book.publisher}</td>
              <td>{book.numberOfPages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
