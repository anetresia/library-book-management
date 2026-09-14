
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";

function App() {
  const [page, setPage] = useState("dashboard");

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      price: 2500,
      category: "Programming",
      available: true,
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 3000,
      category: "Self Help",
      available: true,
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 1800,
      category: "Fiction",
      available: false,
    },
    {
      id: 4,
      title: "Python Basics",
      author: "John Smith",
      price: 2200,
      category: "Programming",
      available: true,
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 2800,
      category: "Finance",
      available: true,
    },
  ]);

  return (
    <div className="app">

      <Sidebar
        page={page}
        setPage={setPage}
      />

      <div className="main-area">

        <Navbar />

        <main className="content">

          {page === "dashboard" && (
            <Dashboard
              books={books}
              setPage={setPage}
            />
          )}

          {page === "books" && (
            <Books
              books={books}
              setBooks={setBooks}
              setPage={setPage}
            />
          )}

          {page === "add-book" && (
            <AddBook
              books={books}
              setBooks={setBooks}
              setPage={setPage}
            />
          )}

        </main>

      </div>

    </div>
  );
}

export default App;
