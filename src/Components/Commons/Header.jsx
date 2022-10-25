import './header.scss';
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="c-header">
            <div className="container is-flex">
                <div className="c-header__left">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="c-header__right">
                    <div className="c-nav">
                        <div className="c-nav-item">
                            <Link to="/">
                                Trang chủ
                            </Link>
                        </div>
                        <div className="c-nav-item c-drop-down">
                            <Link to="/">
                                Nạp tiền
                            </Link>
                            <i className="bi bi-caret-down-fill"></i>
                            <ul>
                                <li className="c-list-item">
                                    <Link to="/nap-tien">
                                        Nạp thẻ tự động
                                    </Link>
                                </li>
                                <li className="c-list-item">
                                    <Link to="/atm">
                                        Nạp tiền từ ATM/Ví điện tử
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="c-nav-item">
                            <Link to="/quan-huy">
                                Rút quân huy
                            </Link>
                        </div>
                    </div>
                    <div className="c-login">
                        <Link to="/login">Đăng nhập</Link>
                        <Link to="/register">Đăng ký</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;