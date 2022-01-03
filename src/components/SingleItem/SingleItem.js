import React from "react";
import styles from "./SingleItem.module.css";

const SingleItem = () => {
  return (
    <div className={styles.singleItem}>
      <img className={styles.singleItem__image} src="https://micoedward.com/wp-content/uploads/2018/04/Love-your-product.png" alt="" />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>Title</p>
        <p className={styles.details__description}>Description</p>
        <p className={styles.details__price}>$ 10.00</p>

        <button className={styles.details__addBtn}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleItem;
