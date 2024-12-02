import './style.scss';
import { memo } from 'react';
import React from 'react';

import logodhkt from 'assets/user/image/categories/Logo_dhktdn.png';
import logologin from 'assets/user/image/categories/logo.png';
import { router } from 'utils/router';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-left">
                <h1 className="login-logo"></h1>
                <p className="login-description">
                    CÂU CÁ LÀ MỘT NGHỆ THUẬT - NGƯỜI CÂU CÁ LÀ MỘT NGHỆ SĨ
                </p>
                <img
                    src={logologin} // Đặt hình ảnh minh họa liên quan
                    alt="Fishing"
                    className="fishing-image"
                />
            </div>

            <div className="login-right">
                <div className="login-box">
                    <img style={{ width: '100px', height: '100px' }}
                        src={logodhkt} // Đặt hình ảnh minh họa liên quan
                        alt="Fishing"
                        className="logodhkt"
                    />
                    <h2 className="login-heading">Đăng nhập tài khoản</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Email hoặc số điện thoại"
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            className="login-input"
                        />
                        <button
                            type="submit"
                            className="btn login-btn"
                        >
                            Đăng nhập
                        </button>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <a href="#" className="forgot-password">Quên mật khẩu?</a>
                            <Link to={router.USER.REGISTER} style={{ textDecoration: 'none', color: 'black' }}>Đăng kí</Link>
                        </div>
                        <hr className="divider" />
                        {/* <button
                            type="button"
                            className="btn signup-btn"
                        >
                            Tạo tài khoản mới
                        </button> */}
                    </form>
                </div>

            </div>
        </div>
    );
};

export default memo(LoginPage);
