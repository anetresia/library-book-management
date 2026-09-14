function Sidebar({ page, setPage }) {
   return (
     <aside className="sidebar">
       <div className="brand">
         <div className="brand-icon"> 📚 </div> 
         <div> <h2>Library</h2> <span>Library System</span> </div> </div>
          <div className="sidebar-section"> 
            <p className="sidebar-label"> MAIN MENU </p>
             <button
              className={`sidebar-item ${
                 page === "dashboard" ? "active" : "" }`}
                  onClick={() => setPage("dashboard")} >
                     <span>⌂</span> <span>Dashboard</span>
                      </button>
                       <button className={`sidebar-item ${
                         page === "books" ? "active" : "" }`}
                          onClick={() => setPage("books")} >
                             <span>▣</span>
                              <span>Books</span>
                               </button>
                                <button className={`sidebar-item ${
                                   page === "add-book" ? "active" : "" }`} 
                                   onClick={() => setPage("add-book")} >
                                     <span>＋</span> <span>Add New Book</span>
                                      </button> </div>
                                       <div className="sidebar-bottom"> 
                                        <div className="library-tip"> 
                                          <div className="tip-icon"> 💡 </div>
                                           <div> <strong>Library Tip</strong>
                                            <p> Keep your book collection organized and updated. </p> 
                                            </div>
                                             </div>
                                              <p className="sidebar-footer"> Library Management System </p>
                                               </div> 
                                               </aside>
                                                ); 
                                              }
                                               export default Sidebar;