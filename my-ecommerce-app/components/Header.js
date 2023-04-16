import Link from "next/link";

const Header = () => {
    return (
        <header>
            <img src="/logo.png" alt="my logo" />
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;