import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({cart}) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach(item => count += item.qty);
    setCartCount(count)
  }, [cart, cartCount])
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>React redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838838.png?token=exp=1641206020~hmac=23fa571247f6090fe5158e29d8152237"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProos = state => {
  return {
    cart: state.shop.cart,
  }
}
export default connect(mapStateToProos)(Navbar);
