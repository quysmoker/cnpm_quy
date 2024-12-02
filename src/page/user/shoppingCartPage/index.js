import { memo } from 'react';
import BreadCrumb from '../theme/breadCrumb';
import './style.scss';
import { formatter } from 'utils/formater';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { router } from 'utils/router';
import { useNavigate } from 'react-router-dom';



const ShoppingCartPage = () => {

    const navigate = useNavigate();


    return <>
        <BreadCrumb name="Giỏ Hàng" />
        <div className="container">
            <div className='table_cart'>
                <table>
                    <thead>
                        <tr>
                            <th>Tên </th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='shopping_cart'>
                                <img src="src/assets/user/image/categories/cart-3.jpg" alt="" />
                                <h4>Tên sp</h4>
                            </td>
                            <td> {formatter(2000000)} </td>
                            <td> 2</td>
                            <td> {formatter(2000000)} </td>
                            <td className='icon_close'>
                                <AiOutlineClose />
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>



            <div className='row'>
                <div className='col-lg-8'>
                    <div className='shopping_content'>
                        <h3>Giảm giá</h3>
                        <div className='shopping_discount'>
                            <input placeholder='Nhập mẫ giảm giá' />
                            <button>Áp dụng </button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='shopping_checkout'>
                        <h1>Tổng đơn:</h1>
                        <ul>
                            <li>Số lượng :<span>2</span></li>
                            <li>Thành tiền: <span>{formatter(2000000)}</span></li>
                        </ul>
                        <button type='button' className='button_submit' onClick={() => navigate(router.USER.CHECKOUT)}>
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div >
    </>
};


export default memo(ShoppingCartPage);