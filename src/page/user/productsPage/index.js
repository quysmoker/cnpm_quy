import { memo } from 'react';
import Breadcrumb from '../theme/breadCrumb';
import './style.scss';
import ProductCard from 'component/ProductCard';


import featured5Img from "assets/user/image/featured/luoihoa-long-chep.webp";
import featured6Img from "assets/user/image/featured/luoivayrong.webp";
import featured7Img from "assets/user/image/featured/luoikimnguu.webp";
import featured8Img from "assets/user/image/featured/luoikim-long-tong-hop.webp";
import featured9Img from "assets/user/image/featured/Gao-ruou-kim-long-avt-300x300.webp";
import featured10Img from "assets/user/image/featured/moi-cau-ca-diec-kim-long-av-300x300.png";
import featured11Img from "assets/user/image/featured/moi-cau-ca-me-handing-vi-dau-avt-300x300.webp";
import featured12Img from "assets/user/image/featured/Tong-hop-kim-long-2-300x300.png";


const products = () => [
    {
        img: featured5Img,
        name: 'Lưỡi Hỏa Long Chép',
        price: '80000',
    },
    {
        img: featured6Img,
        name: 'Lưỡi Vẩy Rồng',
        price: '60000',
    },
    {
        img: featured7Img,
        name: 'Lưỡi Kim Ngưu',
        price: '70000',
    },
    {
        img: featured8Img,
        name: 'Lưỡi Tổng Hợp',
        price: '25000',
    },
    {
        img: featured9Img,
        name: 'Tinh Mùi Rượu Gạo',
        price: '250000',
    },
    {
        img: featured10Img,
        name: 'Mồi Câu Diếc',
        price: '50000',
    },
    {
        img: featured11Img,
        name: 'Mồi Câu Cá Mè',
        price: '70000',
    },
    {
        img: featured12Img,
        name: 'Mồi Câu Tổng Hợp',
        price: '25000',
    },

]

const ProductsPage = () => {
    return (
        <>
            <Breadcrumb name=" Danh Sách Sản Phẩm" />
            <div className="container" >
                <div className="row" >
                    <div className="col-lg-">

                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row">
                                    {
                                        products().map((item, key) => (
                                            <div className="col-lg-3" key={key}>
                                                <ProductCard
                                                    name={item.name}
                                                    img={item.img}
                                                    price={item.price}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};


export default memo(ProductsPage);