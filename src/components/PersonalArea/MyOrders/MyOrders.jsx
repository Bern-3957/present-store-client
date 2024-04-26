import React from "react";
import s from "./MyOrders.module.css";
import {userAPI} from "../../../api/api";
import {removeToken} from "../../../customProvider/tokenProvider";
import {useAuth} from "../../../hoc/withAuth";
import {useDispatch} from "react-redux";
import {setCartItemsAC} from "../../../store/actions/actionCreators";
import base_img from "./../../../assets/images/cart/Rectangle 21.png";

const MyOrders = (props) => {

    return (
        <div className={s.myOrders}>
            {props.orders.length>0 && props.orders.map(order => {
                return <div className={s.order}>
                    <div className={s.orderInfo}>
                        <div className={s.orderId}>id: {order.id}</div>
                        <div className={s.orderStatus}>{order.order_status}</div>
                        <div className={s.orderDate}>{order.order_date}</div>
                    </div>
                    <div className={s.orderInner}>
                        {order.order_details.map(item=> {
                            return <div className={s.product}>
                                <img src={`http://127.0.0.1:8000${item.product.images[0].image}`} alt="" className={s.productImage}/>
                                <div className={s.productInfo}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            gap: "10px",
                                        }}>
                                        <div className={s.productTitle}>{item.product.title}</div>
                                        <div className={s.productVendorCode}>арт. {item.product.vendor_code}</div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "20px",
                                        }}>
                                        <div className={s.productQuantity}>{item.quantity} шт.</div>
                                        <div className={s.productPrice}>{item.product.price} ₽</div>
                                    </div>
                                </div>

                            </div>
                        })}



                    </div>
                </div>
            })}

        </div>
    );
};

export default MyOrders;
