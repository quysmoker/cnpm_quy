import { memo } from 'react';
import BreadCrumb from '../theme/breadCrumb';
import './style.scss'
import './style.scss';
import { router } from 'utils/router';
import { Link } from 'react-router-dom';
import { formatter } from 'utils/formater';







const CheckOutPage = () => {
    return <>
        <BreadCrumb name="Thanh toán" />
        <div className="container" style={{ width: '80%' }}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="checkout_input">
                        <lable>
                            Họ Và Tên: <span className="required">*</span>
                        </lable>
                        <input type="text" placeholder="Họ Và Tên"></input>
                    </div>
                    <div className="checkout_input">
                        <lable>
                            Địa chỉ: <span className="required">*</span>
                        </lable>
                        <input type="text" placeholder="Địa chi"></input>
                    </div>
                    <div className="checkout_input">
                        <lable>
                            SDT: <span className="required">*</span>
                        </lable>
                        <input type="text" placeholder="Số Diện Thoại "></input>
                    </div>
                    <div className="checkout_input">
                        <lable>
                            Ghi Chú: <span className="required"></span>
                        </lable>
                        <textarea placeholder="Ghi chú của khách hàng"></textarea>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="checkout_oder">
                        <h2>Đơn hàng</h2>
                        <ul>
                            <li>
                                <span>Sản phảm 1</span>
                                <b>{formatter(2000000)}</b>
                            </li>
                            <li>
                                <span>Sản phảm 2 </span>
                                <b>{formatter(2000000)}</b>
                            </li>
                            <li className='checkout_oder_subtotal'>
                                <h3>Tổng đơn</h3>
                                <b>{formatter(2000000)}</b>

                            </li>
                        </ul>
                        <button className='checkout_button'>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div >
    </>
};


export default memo(CheckOutPage);