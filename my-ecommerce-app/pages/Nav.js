import Link from 'next/link'

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/Home" passHref legacyBehavior>
                        <a>Home</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
