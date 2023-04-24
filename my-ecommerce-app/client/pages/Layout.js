import React from 'react'

function Layout({ children }) {
    return (
        <div>
            <header>My ecommerce app</header>
            <main>{children}</main>
            <footer>&copy; 2021 My ecommerce app</footer>
        </div>
    )
}

export default Layout