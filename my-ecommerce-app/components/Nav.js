import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link href="/">
                      Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link href="/About">
                      About
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link href="/Products">
                      Products
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link href="/Contact">
                      Contact
                    </Link>
                </li>
                <li className="navbar-item">
                  <Link href="/CheckoutPage">
                    Checkout
                  </Link>
                </li>
            </ul>
            <style jsx>{`
        .navbar {
          background-color: #fff;
          border-bottom: 1px solid #ccc;
          height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }
        .navbar-list {
          list-style-type: none;
          display: flex;
        }
        .navbar-item {
          margin-right: 20px;
        }
        .navbar-item:last-child {
          margin-right: 0;
        }
        .navbar-item a {
          color: #333;
          text-decoration: none;
          font-size: 16px;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .navbar-item a:hover {
          color: #f00;
        }
      `}</style>
        </nav>
    )
}

export default NavBar

