import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import ProductItem from './ProductItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Thumb from '../Thumb/index';
import { formatPrice } from '../../services/util';
import { addProduct } from '../../services/cart/actions';


const Product = ({ product, addProduct }) => {
    product.quantity = 1;
    let formattedPrice = formatPrice(product.price, product.currencyId);
    let productInstallment;

    if (!!product.installments) {
        const installmentPrice = product.price / product.installments;

        productInstallment = (
            <div className="installment">
                <span>or {product.installments} x</span>
                <b>
                    {product.currencyFormat}
                    {formatPrice(installmentPrice, product.currencyId)}
                </b>
            </div>
        );
    }

    return (
        // <div
        //     className="shelf-item"
        //     onClick={() => addProduct(product)}
        //     data-sku={product.sku}
        // >
        //     <Thumb
        //         classes="shelf-item__thumb"
        //         src={require(`../../../../static/products/${product.sku}.jpg`)}
        //         alt={product.title}
        //     />
        //     <p className="shelf-item__title">{product.title}</p>
        //     <div className="shelf-item__price">
        //         <div className="val">
        //             <small>{product.currencyFormat}</small>
        //             <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
        //             <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        //         </div>
        //     </div>
        //     <div className="shelf-item__buy-btn">Add to cart</div>
        // </div>
           
        <div className="types" onClick={() => addProduct(product)} >
                <Thumb
                    classes="shelf-item__thumb"
                    src={require(`../../static/products/${product.sku}.jpg`)}
					alt={product.title}
					data-sku={product.sku}
                />
                <p className="shelf-item__title">{product.title}</p>
                <div className="shelf-item__price">
                    <div className="val">
                        <small>{product.currencyFormat}</small>
                        <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
                        <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
                    </div>
                </div>
                <div className="shelf-item__buy-btn">Add to cart</div>
                
                </div>
          
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    addProduct: PropTypes.func.isRequired
};

export default connect(
    null,
    { addProduct }
)(Product);



// class Product extends React.Component {
//     state = {
//         products: []
//     }


//     render() {
//         const { products } = this.state;
//         return (
//             <div id="product" className="products">
//                 <div className="container">

//                     <div className="title"><h1>our Products</h1></div>
//                     <div className="types">
//                         {
//                           products.map((product, index) => <ProductItem product={product} key={index}  />)
//                         }
//                         {/* {

//                                 this.state.products.map((p, i) => {
//                                         console.log(p.src);

//                                         let src = p.name.trim();
//                                     return (
//                                         <div className="apple" key={i}>
//                                             <img src={require(`../../../api/uploads/${src}.jpg`)}    alt="apple" title="apple" />
//                                             <h3>{p.name}</h3>
//                                             <h5> {p.price}/ kg</h5>
//                                             <select>
//                                                 <option disabled>KG</option> <option>0.5</option> <option defaultValue>1</option> <option>1.5</option> <option>2</option>  <option>2.5</option>  <option>3</option>  <option>3.5</option>  <option>4</option>  <option>4.5</option> <option>5</option></select>
//                                             <button onClick={this.addToCart}  ><i className="fas fa-cart-plus"></i> Add to chart</button>
//                                         </div>
//                                     )
//                                 })
//                             } */}

//                     </div>
//                     <div className="clearfix"></div>
//                     <button className="more">More...</button>
//                 </div>
//             </div>

//         // return (
//         //     <div id="product" className="products" onClick={() => addProduct(product)}
//         //         data-sku={product.sku} >
//         //             <div className="container">
//         //             <div className="title"><h1>our Products</h1></div>
//         //             <div className="types">
//         //         <Thumb
//         //             classes="shelf-item__thumb"
//         //             src={require(`../../../../static/products/${product.sku}.jpg`)}
//         //             alt={product.title}
//         //         />
//         //         <p className="shelf-item__title">{product.title}</p>
//         //         <div className="shelf-item__price">
//         //             <div className="val">
//         //                 <small>{product.currencyFormat}</small>
//         //                 <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
//         //                 <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
//         //             </div>
//         //         </div>
//         //         <div className="shelf-item__buy-btn">Add to cart</div>
                
//         //         </div>
//         //     </div>
//         //     </div> 
        
//         // );
//     }
// }

// export default Product;

