function Footer() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand mb-0 h1 fw-bold" href="#">
                Meet Me!
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                  <a href="#" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="#" className="nav-item nav-link">
                    About
                  </a>
                  <a href="#" className="nav-item nav-link">
                    Services
                  </a>
                  <a href="#" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <hr className="nav-divider text-light" />
                <div className="navbar-nav ms-auto">
                  <a href="#" className="nav-item nav-link">
                    Login
                  </a>
                  <a href="#" className="nav-item nav-link">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
  
  export default Footer;
  