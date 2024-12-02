import { memo } from 'react';
import './style.scss';


const LoginAdminPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div>
            <div className="login-container">
                <div className="login-box">
                    <h2>Admin Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                placeholder=" "
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                placeholder=" "
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
};


export default memo(LoginAdminPage);