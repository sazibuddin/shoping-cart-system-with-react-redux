import React, {useState,useEffect} from "react";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";

const Cart = ({cart}) => {

  const [totalprice, setTotalPrice] = useState(0)
  const [totalitems, setTotalItems] = useState(0)

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    })
    setTotalPrice(price)
    setTotalItems(items)
  }, [cart,totalprice,totalitems,setTotalItems,setTotalPrice])

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ( {totalitems} items)</span>
          <span>$ {totalprice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};
const mapStateToProos = state => {
  return {
    cart: state.shop.cart,
  }
}
export default connect(mapStateToProos)(Cart);
