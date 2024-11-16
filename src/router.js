import { Routes, Route } from "react-router-dom";
import { router } from './utils/router';  // Đảm bảo import router đúng
import HomePage from "./page/user/homePage";
import MasterLayout from "./page/user/theme/masterLayout";
import ProfilePage from "./page/user/profilePage";

const renderUserCustom = () => {
    const userRouter = [
        {
            path: router.USER.HOME_PAGE,  // Sửa từ Router thành router
            component: <HomePage />,
        },
        {
            path: router.USER.PROFILE,     // Sửa từ Router thành router
            component: <ProfilePage />,
        },
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserCustom();
}

export default RouterCustom;
