import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export function CartContextProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);
	const addProduct = (productId) =>{
		setCartProducts(prev => [...prev, productId]);
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
		<CartContext.Provider value={{ cartProducts, addProduct }}>
			{children}
		</CartContext.Provider>
	);
}
