function Navbar()
 { return (
   <header className="navbar">
     <div className="navbar-left">
       <div className="mobile-logo"> 📚 </div>
        <div> <p className="navbar-small"> LIBRARY MANAGEMENT </p>
         <h2> Book Management System </h2> </div> </div>
          <div className="navbar-right"> <button className="notification-btn"> 🔔 <span></span> </button>
           <div className="user-profile"> <div className="user-avatar"> A </div>
            <div className="user-info"> <strong>Admin</strong> <small>Library Admin</small> </div> </div> </div>
             </header>
              );
             }
              export default Navbar;