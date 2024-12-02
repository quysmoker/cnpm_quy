import './style.scss';
import { memo } from 'react';
import React from 'react';
import logodhkt from 'assets/user/image/categories/Logo_dhktdn.png';
import logologin from 'assets/user/image/categories/logo.png';
import { Link } from 'react-router-dom';
import { router } from 'utils/router';



const RegisterPage = () => {
    return (
        <div className="container_register">
            <div className="left">
                <h1 className="logo"></h1>
                <p className="description">
                    CÂU CÁ LÀ MỘT NGHỆ THUẬT - NGƯỜI CÂU CÁ LÀ MỘT NGHỆ SĨ
                </p>
                <img
                    src={logologin}// Hình ảnh minh họa
                    alt="Fishing Register"
                    className="image"
                />
            </div>

            <div className="right">
                <div className="box">
                    <img style={{ width: '100px', height: '100px' }}
                        src={logodhkt}// Hình ảnh minh họa
                        alt="Fishing Register"
                        className="image"
                    />
                    <h2 className="heading">Tạo tài khoản mới</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            className="input"
                        />
                        <button
                            type="submit"
                            className="btn submit-btn"
                        >
                            Đăng ký
                        </button>
                    </form>
                    {<p className="" style={{ bottom: "20px" }}>
                        Đã có tài khoản? <Link to={router.USER.LOGIN}>Đăng nhập ngay</Link>
                    </p>}
                </div>
            </div>
        </div>
    );
};

export default memo(RegisterPage);
