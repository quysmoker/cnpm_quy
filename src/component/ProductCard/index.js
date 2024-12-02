import { memo } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { formatter } from 'utils/formater';





const ProductCard = ({ img, name, price }) => {
    return (
        <>
            <div className="featured__item">
                <div className="featured__item__pic"
                    style={{
                        backgroundImage: `url(${img})`, backgroundSize: "cover"
                    }}>
                    <ul className="featured__item__pic__hover">
                        <li>
                            <AiOutlineEye />
                        </li>
                        <li>
                            <AiOutlineShoppingCart />
                        </li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6>
                        <Link to="">{name}</Link>
                    </h6>
                    <h5>{formatter(price)}</h5>
                </div>
            </div>
        </>
    )
};

export default memo(ProductCard);