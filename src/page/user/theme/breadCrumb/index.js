import { memo } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { router } from 'utils/router';


const Breadcrumb = (props) => {
    return (
        <div className='breadcrumb'>
            <div className="breadcrumb__text">
                <h2>QUÝ THÍCH CÂU</h2>
                <div className="breadcrumb__option">
                    <ul>
                        <li className="link">
                            <Link to={router.USER.HOME_PAGE}>Trang chủ</Link>
                        </li>
                        <li> {props.name}</li>
                    </ul>
                </div>
            </div>
        </div >
    );
};


export default memo(Breadcrumb);