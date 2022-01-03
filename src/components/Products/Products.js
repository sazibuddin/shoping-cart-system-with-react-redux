import React from "react";
import styles from "./Products.module.css";
import {connect} from 'react-redux'

import Product from "./Product/Product";

const Products = ({products}) => {
  return (
    <div className={styles.products}>
      {products.map(prod => (
        <Product product={prod} key={prod.id} />
      ))}
      
    </div>
  );
};

const mapStateToProos = state => {
  return {
    products: state.shop.products,
  }
}
export default connect(mapStateToProos)(Products);
