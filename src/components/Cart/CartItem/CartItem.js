import React, {useState} from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import {removeFromCart, adjustQty} from '../../../store/reducers/shopping/shoppingActions'


const CartItem = ({item, removeFromCart,adjustQty}) => {
  const [input, setInput] = useState(item.qty)

  const onChangehandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value)
  }

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.qty * item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangehandler} />
        </div>
        <button className={styles.actions__deleteItemBtn} onClick={() => removeFromCart(item.id)}>
          <img
            src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1641272499~hmac=3e04eeb720825aacf708963771c66c6c"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
