function Footer() {
    return (
        <div className="footer-menu justify-content-between">
            <nav className="navbar navbar-expand-lg ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Articles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="copywright">
                <p>© 2023 Tharindu.dev. All Rights Reserved.</p>
            </div>
        </div>


    );
}
export default Footer;