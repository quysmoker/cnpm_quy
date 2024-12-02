import { memo } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container_footer">
                <div className="row">
                    <div className="col">
                        <h1 className="footer_about_logo" style={{ color: 'white' }}>Quý Thích Câu</h1>
                        <ul>
                            <li>Địa chỉ: 86 Lê Đình Lý</li>
                            <li>Phone: 0345 456 789</li>
                            <li>Email: Quythichcau@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Cửa hàng</h2>
                        <ul>
                            <li>Liên hệ</li>
                            <li>Thông tin về chúng tôi</li>
                            <li>Sản phẩm kinh doanh</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Thông tin tài khoản</h2>
                        <ul>
                            <li>Giỏ hàng</li>
                            <li>Danh sách ưa thích</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Khuyến mãi & Ưu đãi</h2>
                        <p style={{ marginBottom: '20px' }}>Đăng ký nhận thông tin tại đây.</p>
                        <form>
                            <input type="email" placeholder="Nhập email" />
                            <button type="submit">ĐĂNG KÝ</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>

    )
};


export default memo(Footer);