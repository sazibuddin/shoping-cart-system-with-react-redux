import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
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
          <div className={styles.cart__counter}>0</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
