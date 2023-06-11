import Header from "@/components/Header/Header";

import style from '../styles/pagesStyle/cart.module.scss'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import Table from "@/components/Table/Table";
import PrimaryBtn from "@/components/PrimaryBtn/PrimaryBtn";

export default function CartPage () {
  const { cartProducts, addProduct, removeProduct, computeTotalPrice } =
		useContext(CartContext);
  const [products, setProducts] = useState([])

	const userInitialData = {name: '', email:'', city: '', postalCode: '', street: '', country:''};
	const [userInfo, setUserInfo] = useState(userInitialData);

  useEffect(() => {
    axios.post('/api/cart', {ids: cartProducts}).then(response =>{
      setProducts(response.data)
    })
  }, [cartProducts]);

	let totalPrice = 0;
	for (const product of cartProducts){
		const price = products.find((p) => p.id === product)?.price || 0;
		totalPrice += price
	}

	const handleChange = (ev) =>{
		const element = ev.target;
		setUserInfo({
			...userInfo,
			[element.name]: element.value,
		});
	}

	const handleSubmit = async (ev) =>{
		const formData = ev.currentTarget;
		const response = await axios.post('/api/checkout', {
			userInfo,
			cartProducts,
			products,
		});
	}

  return (
		<>
			<Header></Header>
			<article className={style.cartContainer}>
				<section className={style.cartBox}>
					<h2>Cart</h2>
					<div className={style.cartList}>
						{products.length > 0 ? (
							<Table
								products={products}
								cartProducts={cartProducts}
								addProduct={addProduct}
								removeProduct={removeProduct}
								totalPrice={totalPrice}
							></Table>
						) : (
							<div>Your cart is empty.</div>
						)}
					</div>
				</section>
				{products.length > 0 ? (
					<section className={style.cartBox}>
						<h2>Order Information</h2>
						<form
							className={style.orderInfo}
							method="post"
							action='/api/checkout'
						>
							<input
								type='text'
								name='name'
								placeholder='Name'
								value={userInfo?.name || ''}
								onChange={handleChange}
							></input>
							<input
								type='text'
								name='email'
								placeholder='Email'
								value={userInfo?.email || ''}
								onChange={handleChange}
							></input>
							<div className={style.twoColumsInput}>
								<input
									className={style.inputCity}
									type='text'
									name='city'
									placeholder='City'
									value={userInfo?.city || ''}
									onChange={handleChange}
								></input>
								<input
									className={style.inputPZS}
									type='text'
									name='postalCode'
									placeholder='Postal code'
									value={userInfo?.postalCode || ''}
									onChange={handleChange}
								></input>
							</div>
							<input
								type='text'
								name='street'
								placeholder='Street Adress'
								value={userInfo?.street || ''}
								onChange={handleChange}
							></input>
							<input
								type='text'
								name='country'
								placeholder='Country'
								value={userInfo?.country || ''}
								onChange={handleChange}
							></input>
							<input
								type='hidden'
								name='products'
								value={cartProducts.join(',')}
							></input>
							<PrimaryBtn onClick={handleSubmit} btn='secondaryBtn'>
								Continue to payment
							</PrimaryBtn>
						</form>
					</section>
				) : null}
			</article>
		</>
	);
}