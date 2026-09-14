
import { useState } from "react";

function AddBook({ books, setBooks, setPage }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: books.length + 1,
      title: book.title,
      author: book.author,
      price: Number(book.price),
      category: book.category,
      available: book.available,
    };

    setBooks([...books, newBook]);

    alert("Book added successfully!");

    setPage("books");
  };

  const handleCancel = () => {
    setPage("books");
  };

  return (
    <div className="add-book-page">

      <div className="page-header">
        <div>
          <h1>Add New Book</h1>
          <p>Add a new book to your library</p>
        </div>
      </div>

      <div className="form-card">

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Book Title</label>

            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="form-group">
            <label>Author</label>

            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Price</label>

              <input
                type="number"
                name="price"
                value={book.price}
                onChange={handleChange}
                placeholder="Enter price"
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select
                name="category"
                value={book.category}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select category
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
            </div>

          </div>

          <div className="availability-box">

            <input
              type="checkbox"
              name="available"
              checked={book.available}
              onChange={(e) =>
                setBook({
                  ...book,
                  available: e.target.checked,
                })
              }
            />

            <div>
              <strong>
                Book is available
              </strong>

              <p>
                Mark this book as currently available
              </p>
            </div>

          </div>

          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-button"
            >
              + Add Book
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddBook;