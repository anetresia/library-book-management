
function Dashboard({ books, setPage }) {
  const totalBooks = books.length;

  const availableBooks = books.filter(
    (book) => book.available
  ).length;

  const unavailableBooks = books.filter(
    (book) => !book.available
  ).length;

  return (
    <div className="dashboard">

      <div className="welcome-section">
        <div>
          <h1>Welcome back, Admin 👋</h1>
          <p>
            Here is what's happening in your library today.
          </p>
        </div>

        <button
          className="add-book-btn"
          onClick={() => setPage("add-book")}
        >
          + Add Book
        </button>
      </div>

      <div className="stats">

        <div className="stat-card">
          <div className="stat-icon">📚</div>

          <div>
            <p>Total Books</p>
            <h2>{totalBooks}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>

          <div>
            <p>Available Books</p>
            <h2>{availableBooks}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">❌</div>

          <div>
            <p>Unavailable Books</p>
            <h2>{unavailableBooks}</h2>
          </div>
        </div>

      </div>

      <div className="books-section">

        <div className="section-header">

          <div>
            <h2>Recent Books</h2>
            <p>Recently added books in your library</p>
          </div>

          <button
            className="view-btn"
            onClick={() => setPage("books")}
          >
            View All
          </button>

        </div>

        <div className="dashboard-books">

          {books.slice(-5).reverse().map((book) => (

            <div
              className="dashboard-book"
              key={book.id}
            >

              <div className="dashboard-book-icon">
                📖
              </div>

              <div className="dashboard-book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>

              <span className="dashboard-category">
                {book.category}
              </span>

              <strong>
                Rs. {book.price}
              </strong>

              {book.available ? (
                <span className="status available">
                  ● Available
                </span>
              ) : (
                <span className="status unavailable">
                  ● Unavailable
                </span>
              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
