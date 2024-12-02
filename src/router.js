import { Routes, Route, useLocation } from "react-router-dom";
import { ADMIN_PATH, router } from './utils/router';  // Đảm bảo import router đúng
import HomePage from "./page/user/homePage";
import MasterLayout from "./page/user/theme/masterLayout";
import ProfilePage from "./page/user/profilePage";
import ProductsPage from "./page/user/productsPage";
import LoginPage from "page/user/loginPage";
import React from 'react';
import RegisterPage from "page/user/registerPage";
import ShoppingCartPage from "page/user/shoppingCartPage";
import CheckOutPage from "page/user/checkOutPage";
import MasterAdminLayout from "page/admin/theme/masterAdminLayout";
import LoginAdminPage from "page/admin/loginPage";


const renderUserCustom = () => {
    const userRouter = [
        {
            path: router.USER.HOME_PAGE,  // Sửa từ Router thành router
            component: <HomePage />,
            layout: MasterLayout,
        },
        {
            path: router.USER.PROFILE,
            component: <ProfilePage />,
            layout: MasterLayout,
        },
        {
            path: router.USER.PRODUCTS,
            component: <ProductsPage />,
            layout: MasterLayout,
        },
        {
            path: router.USER.LOGIN,
            component: <LoginPage />,
        },
        {
            path: router.USER.REGISTER,
            component: <RegisterPage />,
        },
        {
            path: router.USER.SHOPPING_CART,
            component: <ShoppingCartPage />,
            layout: MasterLayout,
        },
        {
            path: router.USER.CHECKOUT,
            component: <CheckOutPage />,
            layout: MasterLayout,
        },
    ];

    return (
        <Routes>
            {userRouter.map(
                ({ path, component, layout: Layout = React.Fragment }, key) => (
                    <Route key={key} path={path} element={<Layout>{component}</Layout>} />
                ))}
        </Routes>

    );
};

const renderAdminRouter = () => {
    const adminRouter = [
        {
            path: router.ADMIN.LOGIN,  // Sửa từ Router thành router
            component: <LoginAdminPage />,
        },
    ];

    return (
        <MasterAdminLayout>
            <Routes>
                {adminRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterAdminLayout >
    );
};

const RouterCustom = () => {
    const location = useLocation();
    const isAdminRoutes = location.pathname.startsWith(ADMIN_PATH)

    return isAdminRoutes ? renderAdminRouter() : renderUserCustom();

};

export default RouterCustom;
