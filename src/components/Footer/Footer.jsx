import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
            <div className="footer__col">
                        <nav className="menu-bottom">
                            <a href="/catalogue" className="menu-bottom__item">
                                Каталог
                            </a>
                            <a href="/catalogue" className="menu-bottom__item">
                                Акции
                            </a>
                            <a href="/catalogue" className="menu-bottom__item">
                                Новости
                            </a>
                            <a href="/catalogue" className="menu-bottom__item">
                                Отзывы
                            </a>
                        </nav>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;