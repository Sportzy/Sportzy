function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg' style={{backgroundColor: '#902BF5'}}>
          <a className="navbar-brand text-white px-4 py-2" href="#">Sportzy</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav justify-content-">
            <l1 className='nav-item'><a className="nav-link text-white" href="#">Home</a></l1>
            <l1 className='nav-item'><a className="nav-link text-white" href="#">Sports</a></l1>
            <li className='nav-item'><a className="nav-link text-white" href="#">Grounds</a></li>
          </ul>
        </div>
        
        </nav>
    );
}

export default Navbar;