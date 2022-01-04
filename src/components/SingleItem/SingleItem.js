import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";

import { addToCart } from "../../store/reducers/shopping/shoppingActions";
import { Link } from "react-router-dom";

const SingleItem = ({currentItem,addToCart}) => {
  return (
    
     <div>
        {currentItem != null ? (
        <div className={styles.singleItem}>
          <img className={styles.singleItem__image} src={currentItem.image} alt="" />
        <div className={styles.singleItem__details}>
          <p className={styles.details__title}>{currentItem.title}</p>
          <p className={styles.details__description}>{currentItem.description}</p>
          <p className={styles.details__price}>$ {currentItem.price}</p>
  
          <button onClick={() => addToCart(currentItem.id)} className={styles.details__addBtn}>Add To Cart</button>
        </div>
       </div>
      ) : (
        <div className={styles.not_found}>
          <h1 className={styles.not_found_h1}>Sorry ! something went wrong. please try again</h1>
          <Link to='/'>Go to home</Link>
        </div>
      )}
     </div>
      
  );
};

const mapStateToProos = state => {
  return {
    currentItem: state.shop.currentItem
  }
};

const mapDispatchToProps  = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }
}

export default connect(mapStateToProos,mapDispatchToProps)(SingleItem);
