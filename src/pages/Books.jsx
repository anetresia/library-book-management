
import { useState } from "react";

function Books({ books, setBooks, setPage }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [selectedBook, setSelectedBook] = useState(null);
  const [editBook, setEditBook] = useState(null);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "" || book.category === category;

    const matchesPrice =
      maxPrice === "" || book.price <= Number(maxPrice);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice
    );
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (confirmDelete) {
      setBooks(
        books.filter((book) => book.id !== id)
      );
    }
  };

  const handleSaveEdit = () => {
    setBooks(
      books.map((book) =>
        book.id === editBook.id
          ? editBook
          : book
      )
    );

    setEditBook(null);
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setMaxPrice("");
  };

  return (
    <div className="books-page">

      {/* Header */}

      <div className="books-header">

        <div>
          <h1>Books</h1>
          <p>Manage all books in your library</p>
        </div>

        <button
          className="add-book-button"
          onClick={() => setPage("add-book")}
        >
          + Add Book
        </button>

      </div>


      {/* Filters */}

      <div className="filter-box">

        <input
          type="text"
          placeholder="🔍 Search books or authors..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="">
            All Categories
          </option>

          <option value="Programming">
            Programming
          </option>

          <option value="Fiction">
            Fiction
          </option>

          <option value="Self Help">
            Self Help
          </option>

          <option value="Finance">
            Finance
          </option>
        </select>

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value)
          }
        />

        <button
          className="filter-button"
          onClick={clearFilters}
        >
          Clear
        </button>

      </div>


      {/* Books Table */}

      <div className="books-table-container">

        <table className="books-table">

          <thead>
            <tr>
              <th>Book</th>
              <th>Author</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredBooks.length > 0 ? (

              filteredBooks.map((book) => (

                <tr key={book.id}>

                  <td>

                    <div className="book-title">

                      <div className="book-icon">
                        📖
                      </div>

                      <div>

                        <strong>
                          {book.title}
                        </strong>

                        <small>
                          Book ID: #{book.id}
                        </small>

                      </div>

                    </div>

                  </td>

                  <td>
                    {book.author}
                  </td>

                  <td>

                    <span className="category">
                      {book.category}
                    </span>

                  </td>

                  <td>
                    Rs. {book.price}
                  </td>

                  <td>

                    {book.available ? (

                      <span className="status available">
                        ● Available
                      </span>

                    ) : (

                      <span className="status unavailable">
                        ● Unavailable
                      </span>

                    )}

                  </td>

                  <td>

                    <button
                      className="action-button view"
                      onClick={() =>
                        setSelectedBook(book)
                      }
                    >
                      View
                    </button>

                    <button
                      className="action-button edit"
                      onClick={() =>
                        setEditBook({
                          ...book,
                        })
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="action-button delete"
                      onClick={() =>
                        handleDelete(book.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="6">

                  <div className="no-books">

                    <div>📚</div>

                    <h3>
                      No books found
                    </h3>

                    <p>
                      Try changing your search
                      or filters.
                    </p>

                  </div>

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* View Book Modal */}

      {selectedBook && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>
              Book Details
            </h2>

            <p>
              <strong>Title:</strong>{" "}
              {selectedBook.title}
            </p>

            <p>
              <strong>Author:</strong>{" "}
              {selectedBook.author}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {selectedBook.category}
            </p>

            <p>
              <strong>Price:</strong>{" "}
              Rs. {selectedBook.price}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {selectedBook.available
                ? "Available"
                : "Unavailable"}
            </p>

            <button
              className="modal-close-button"
              onClick={() =>
                setSelectedBook(null)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}


      {/* Edit Book Modal */}

      {editBook && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>
              Edit Book
            </h2>


            {/* Title */}

            <label>
              Book Title
            </label>

            <input
              type="text"
              value={editBook.title}
              onChange={(e) =>
                setEditBook({
                  ...editBook,
                  title: e.target.value,
                })
              }
            />


            {/* Author */}

            <label>
              Author
            </label>

            <input
              type="text"
              value={editBook.author}
              onChange={(e) =>
                setEditBook({
                  ...editBook,
                  author: e.target.value,
                })
              }
            />


            {/* Price */}

            <label>
              Price
            </label>

            <input
              type="number"
              value={editBook.price}
              onChange={(e) =>
                setEditBook({
                  ...editBook,
                  price: Number(
                    e.target.value
                  ),
                })
              }
            />


            {/* Category */}

            <label>
              Category
            </label>

            <select
              value={editBook.category}
              onChange={(e) =>
                setEditBook({
                  ...editBook,
                  category: e.target.value,
                })
              }
            >
              <option value="Programming">
                Programming
              </option>

              <option value="Fiction">
                Fiction
              </option>

              <option value="Self Help">
                Self Help
              </option>

              <option value="Finance">
                Finance
              </option>

            </select>


            {/* Availability */}

            <label>
              Availability
            </label>

            <select
              value={
                editBook.available
                  ? "Available"
                  : "Unavailable"
              }
              onChange={(e) =>
                setEditBook({
                  ...editBook,
                  available:
                    e.target.value ===
                    "Available",
                })
              }
            >
              <option value="Available">
                Available
              </option>

              <option value="Unavailable">
                Unavailable
              </option>

            </select>


            {/* Buttons */}

            <div className="modal-actions">

              <button
                className="cancel-button"
                onClick={() =>
                  setEditBook(null)
                }
              >
                Cancel
              </button>

              <button
                className="save-button"
                onClick={handleSaveEdit}
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Books;
