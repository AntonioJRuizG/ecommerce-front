import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export function CartContextProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);
	const addProduct = (productId) =>{
		setCartProducts(prev => [...prev, productId]);
	}
	const removeProduct = (productId) =>{
		const productIndex = cartProducts.indexOf(productId);
		
		if (productIndex !== -1) {
			setCartProducts((cartProducts) => {
				const updatedCart = [...cartProducts];
				updatedCart.splice(productIndex, 1);
				return updatedCart;
			});
		}
	}

	const computeTotalPrice = () =>{
		let totalPrice = 0;
		for(const product of cartProducts){
			const productPrice = cartProducts.find(p => p.id === product?.price || 0);
			totalPrice += productPrice;
		}
		return totalPrice;
	}

	useEffect(()=>{
		setCartProducts(JSON.parse(localStorage.getItem('cart')) || []);
	},[])

	useEffect(()=>{
		if(cartProducts.length>0){
			localStorage.setItem('cart', JSON.stringify(cartProducts));
		}
	},[cartProducts])

	return (
		<CartContext.Provider
			value={{ cartProducts, addProduct, removeProduct, computeTotalPrice }}
		>
			{children}
		</CartContext.Provider>
	);
}
