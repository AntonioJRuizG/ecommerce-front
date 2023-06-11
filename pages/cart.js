import Header from "@/components/Header/Header";

import style from '../styles/pagesStyle/cart.module.scss'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import Table from "@/components/Table/Table";

export default function CartPage () {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.post('/api/cart', {ids: cartProducts}).then(response =>{
      setProducts(response.data)
    })
  }, [cartProducts]);

  return (
		<>
			<Header></Header>
			<article className={style.cartContainer}>
				<section className={style.cartBox}>
					<h2>Cart</h2>
					<div className={style.cartList}>
						{products.length > 0 ? (
							<Table products={products} cartProducts={cartProducts}></Table>
						) : (
							<div>Your cart is empty.</div>
						)}
					</div>
				</section>
				<section className={style.orderInfo + ' ' + style.cartBox}>
					<h2>Order Information</h2>
				</section>
			</article>
		</>
	);
}