import Header from "@/components/Header/Header";

import style from '../styles/pagesStyle/cart.module.scss'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import Table from "@/components/Table/Table";
import PrimaryBtn from "@/components/PrimaryBtn/PrimaryBtn";
import ExclamationTriangle from "@/components/icons/ExclamationTriangle";
import Link from "next/link";

export default function CartPage () {
  const { cartProducts, addProduct, removeProduct, clearCart } =
		useContext(CartContext);
  const [products, setProducts] = useState([])
	const [emailError, setEmailError] = useState(false);
	const [paymentSuccess, setPaymentSuccess] = useState(false);


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

	const goToPayment = async () => {
		const response = await axios
		.post('/api/checkout', {
		userInfo,
		cartProducts,
		})
		.catch( function(error) {
			if(error){setEmailError(true)}
		}
		);

		if (typeof window !== 'undefined' && response?.data.url) {
			window.location = response.data.url;
		}
	};

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}
		if (window?.location.href.includes('success')) {
			setPaymentSuccess(true);
			clearCart()
		}
	}, []);

	if (paymentSuccess) {
		return (
			<>
				<Header />
				<article className={style.cartContainer}>
					<section className={style.cartBox}>
						<h2>Thanks for your order!</h2>
						<div>We will email you when your order will be sent.</div>
					</section>
				</article>
			</>
		);
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
							<div className={style.emptyCartList}>
								<p>There are currently no items in your basket.</p>
								<PrimaryBtn href={'/products'} btn='secondaryBtn'>
									Keep shopping
								</PrimaryBtn>
							</div>
						)}
					</div>
				</section>
				{products.length > 0 ? (
					<section className={style.cartBox}>
						<h2>Order Information</h2>
						<div className={style.orderInfo}>
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
							{emailError ? (
								<div className={style.errorTextBox}>
									<ExclamationTriangle></ExclamationTriangle>{' '}
									<p>Email address must be a valid email</p>
								</div>
							) : null}
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
							<PrimaryBtn onClick={goToPayment} btn='secondaryBtn'>
								Continue to payment
							</PrimaryBtn>
						</div>
					</section>
				) : null}
			</article>
		</>
	);
}