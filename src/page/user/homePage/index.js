import { memo } from 'react';
import './style.scss';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductCard } from 'component';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import cart1Img from "assets/user/image/categories/cart-1.jpg";
import cart2Img from "assets/user/image/categories/cart-2.jpg";
import cart3Img from "assets/user/image/categories/cart-3.jpg";
import cart4Img from "assets/user/image/categories/cart-4.jpg";

import featured1Img from "assets/user/image/featured/handing-dai-phao.webp";
import featured2Img from "assets/user/image/featured/handing-nhat-hao-hac-khanh.webp";
import featured3Img from "assets/user/image/featured/handing-nhat-hao.webp";
import featured4Img from "assets/user/image/featured/handing.webp";

import featured5Img from "assets/user/image/featured/luoihoa-long-chep.webp";
import featured6Img from "assets/user/image/featured/luoivayrong.webp";
import featured7Img from "assets/user/image/featured/luoikimnguu.webp";
import featured8Img from "assets/user/image/featured/luoikim-long-tong-hop.webp";
import featured9Img from "assets/user/image/featured/Gao-ruou-kim-long-avt-300x300.webp";
import featured10Img from "assets/user/image/featured/moi-cau-ca-diec-kim-long-av-300x300.png";
import featured11Img from "assets/user/image/featured/moi-cau-ca-me-handing-vi-dau-avt-300x300.webp";
import featured12Img from "assets/user/image/featured/Tong-hop-kim-long-2-300x300.png";

import banner13Img from "assets/user/image/featured/BAIWEB1.png";
import banner14Img from "assets/user/image/featured/LVLC-COVER-WEBSITE-2048x1024.jpg";






const HomePage = () => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const categories_slider_item = [
        {
            bgImg: cart1Img,
            name: "cần ác côn"
        },
        {
            bgImg: cart2Img,
            name: "cần hoàng vũ"
        },
        {
            bgImg: cart3Img,
            name: "cần hắc long"
        },
        {
            bgImg: cart4Img,
            name: "cần hỏa long"
        },
        {
            bgImg: cart3Img,
            name: "cần hắc long"
        },
        {
            bgImg: cart4Img,
            name: "cần hỏa long"
        },



    ];
    const featProducts = {
        all: {
            title: "Toàn bộ ",
            products: [
                {
                    img: featured1Img,
                    name: " Handing Đại Pháo",
                    price: "500000",
                },
                {
                    img: featured2Img,
                    name: "Handing Nhất Hào",
                    price: "200000",
                },
                {
                    img: featured3Img,
                    name: "Handing Nhất Hào Hắc Khanh",
                    price: "1790000",
                },
                {
                    img: featured4Img,
                    name: "Handing Nhẫn",
                    price: "2450000",
                },
            ],
        },
        luoiCau: {
            title: "Lưỡi câu",
            products: [
                {
                    img: featured5Img,
                    name: "Lưỡi Hỏa Long Chép",
                    price: "80000",
                },
                {
                    img: featured6Img,
                    name: "Lưỡi Vẩy Rồng",
                    price: "60000",
                },
                {
                    img: featured7Img,
                    name: "Lưỡi Kim Ngưu",
                    price: "70000",
                },
                {
                    img: featured8Img,
                    name: "Lưỡi Tổng Hợp ",
                    price: "25000",
                },
            ],
        },
        moiCau: {
            title: "Mồi câu",
            products: [
                {
                    img: featured9Img,
                    name: "Tinh Mùi Rượu Gạo",
                    price: "250000",
                },
                {
                    img: featured10Img,
                    name: "Mồi Câu Diếc",
                    price: "50000",
                },
                {
                    img: featured11Img,
                    name: "Mồi Câu Cá Mè",
                    price: "70000",
                },
                {
                    img: featured12Img,
                    name: "Mồi Câu Tổng Hợp ",
                    price: "25000",
                },
            ],
        },


    };


    const renderFeaturedProducts = (data) => {
        const tabLIst = [];
        const tabPanels = [];


        Object.keys(data).forEach((key, index) => {
            tabLIst.push(<Tab key={index}>{data[key].title}</Tab>);

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className="col-lg-3" key={j}>
                        <ProductCard
                            name={item.name}
                            img={item.img}
                            price={item.price}
                        />
                    </div >);
            });
            tabPanels.push(tabPanel);
        });


        return (

            <Tabs>
                <TabList>{tabLIst}</TabList>

                {tabPanels.map((item, key) => (
                    <TabPanel key={key}>
                        <div className="row2">
                            {item}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        );
    };



    return (
        <>
            {/* {Categories Begin } */}
            < div className='container_categories_slider' >
                {< Carousel responsive={responsive} className='categories_slider' >

                    {
                        categories_slider_item.map((item, key) => (
                            <div className='categories_slider_item'
                                style={{ backgroundImage: `url(${item.bgImg})` }}
                                key={key}
                            >
                                <p>{item.name}</p>
                            </div>
                        ))
                    }


                </Carousel>}
            </div>
            {/* {Categories End } */}
            {/* {Features Begin} */}
            <div className='container_categories_slider'>
                <div className='features'>
                    <div className='section_title'>
                        <h2>sản phẩm nổi bật </h2>
                    </div>
                    {renderFeaturedProducts(featProducts)}
                </div>
            </div>
            {/* {Features End} */}
            {/* {Features Begin} */}
            <div className='banner'>
                <div className='banner_pic'>
                    <img src={banner13Img} alt="banner1" style={{ width: "100%" }} />
                </div>
                <div className='banner_pic'>
                    <img src={banner14Img} alt="banner2" style={{ width: "100%" }} />
                </div>
            </div>
            {/* {Features End} */}

        </>
    )

};



export default memo(HomePage);