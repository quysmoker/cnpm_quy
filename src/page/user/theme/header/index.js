import { memo } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className=" header_Top_Left">
                            <h3>CÂU CÁ LÀ MỘT NGHỆ THUẬT - NGƯỜI CÂU CÁ LÀ MỘT NGHỆ SĨ</h3>
                        </div>
                        <div className="header_Top_Right">
                            <ul>
                                <li>
                                    <Link to="/login">
                                        <span>Đăng nhập</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register">
                                        <span>Đăng kí</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            <div className='header_center'>
                <div className='row' style={{ height: '90px' }}>
                    <div className='header_logo'>
                        <div className='logo'>
                            <h1>Quý Thích Câu</h1>
                        </div>
                    </div>
                    <div className='header_search'>
                        <div class="search-bar">
                            <input type="text" placeholder="Tìm kiếm ..." />
                            <button type="submit"><i class="fa fa-search"></i>Tìm kiếm</button>
                        </div>
                    </div>
                    <div className='header_cart'>
                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}> GIỎ HÀNG🛒</a>
                        <span className='cart'>5</span>
                    </div>
                </div>
            </div>
            <div className='menu'>
                <ul>
                    <li>
                        <a href="#home">Trang Chủ</a>
                    </li>
                    <li>
                        <a href="#can-cau">Cần Câu</a>
                        <ul class="submenu">
                            <li><a href="#cau-tay">Câu Tay</a></li>
                            <li><a href="#cau-lure">Câu Lure</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#day-cau">Dây Câu</a>
                        <ul class="submenu">
                            <li><a href="#cau-tay">Dây Cước</a></li>
                            <li><a href="#cau-lure">Dây PE</a></li>
                            <li><a href="#cau-tay">Dây Leader</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#phao">Phao</a>
                        <ul class="submenu">
                            <li><a href="#cau-tay">Phao Đài </a></li>
                            <li><a href="#cau-lure">Phao Lure</a></li>
                            <li><a href="#cau-tay">Phao Cỏ</a></li>
                            <li><a href="#cau-lure">Phao Hố Đấu</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#luoi-cau">Lưỡi Câu</a>
                        <ul class="submenu">
                            <li><a href="#cau-tay">Lưỡi Đâu Đài</a></li>
                            <li><a href="#cau-lure">Lưỡi Đâu Lancer</a></li>
                            <li><a href="#cau-tay">Lưỡi câu máy</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#phu-kien">Phụ Kiện Câu Đài</a>
                    </li>
                </ul>
            </div>
        </>
    )
};


export default memo(Header);