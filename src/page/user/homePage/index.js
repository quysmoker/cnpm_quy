import { memo } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cart1Img from "assets/user/image/categories/cart-1.jpg";
import cart2Img from "assets/user/image/categories/cart-2.jpg";
import cart3Img from "assets/user/image/categories/cart-3.jpg";
import cart4Img from "assets/user/image/categories/cart-4.jpg";


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
        {
            bgImg: cart3Img,
            name: "cần hắc long"
        },
        {
            bgImg: cart4Img,
            name: "cần hỏa long"
        },



    ]

    return (
        <div>
            {/* {Categories Begin } */}
            <div className='container_categories_slider'>
                {<Carousel responsive={responsive} className='categories_slider'>

                    {categories_slider_item.map((item, key) => (
                        <div className='categories_slider_item'
                            style={{ backgroundImage: `url(${item.bgImg})` }}
                            key={key}
                        >
                            <p>{item.name}</p>
                        </div>
                    ))}


                </Carousel>}
            </div >
            {/* {Categories End } */}

        </div>
    )
};


export default memo(HomePage);