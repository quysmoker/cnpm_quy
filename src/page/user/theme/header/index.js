import { memo } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import logoImg from "assets/user/image/categories/logo.png";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { router } from 'utils/router';



const categories = [
    "Trang chủ",
    "Giới thiệu",
    "Sản phẩm",
    "Tin tức",
    "Liên hệ",
]


const Header = () => {
    return (
        <>

            <div className='container'>
                <div className='row' style={{ height: '90px' }}>
                    <div className='header_logo' style={{ display: 'flex', alignItems: 'center' }}  >
                        <div className='logo'>
                            <Link to={router.USER.HOME_PAGE}>
                                <img src={logoImg} style={{ width: '150px', height: '90px' }} alt="logo" />

                            </Link>
                        </div>
                    </div>
                    <div className='header_search'>
                        <div class="search-bar">
                            <input type="text" placeholder="Tìm kiếm ..." />
                            <button type="submit"><i class="fa fa-search"></i>Tìm kiếm</button>
                        </div>
                    </div>
                    <div className='header_cart'>
                        <Link to={router.USER.SHOPPING_CART} style={{ textDecoration: 'none', color: 'black' }}>
                            GIỎ HÀNG
                            <AiOutlineShoppingCart style={{ fontSize: '20px' }} />
                            <span className='cart' >5</span>
                        </Link>
                        <div class="auth-buttons">
                            <Link to={router.USER.LOGIN}> <button id="loginButton" class="auth-button">Đăng Nhập</button></Link>
                            <Link to={router.USER.REGISTER}> <button id="RegisterButton" class="auth-button">Đăng Kí</button></Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className='menu'>
                <ul>
                    {categories.map((category, key) => (
                        <li key={key}>
                            <Link to={router.USER.PRODUCTS}> {category}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};


export default memo(Header);

