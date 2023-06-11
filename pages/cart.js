import Header from "@/components/Header/Header";

import style from '../styles/pagesStyle/cart.module.scss'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";

export default function CartPage () {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([])

  useEffect(() => {
    
  }, [cartProducts]);

  return (
		<>
			<Header></Header>
			<article className={style.cartContainer}>
				<section className={style.cartList + ' ' + style.cartBox}>
					<h2>Cart</h2>
					{cartProducts.length > 0 ? 
            cartProducts.map(cartProduct=> (
            <div key={cartProduct}>{cartProduct}</div>))
            : 
            <div>Your cart is empty.</div>
          }
				</section>
				<section className={style.orderInfo + ' ' + style.cartBox}>
					<h2>Order Information</h2>
				</section>
			</article>
		</>
	);
}