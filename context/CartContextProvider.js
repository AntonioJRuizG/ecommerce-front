import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartContextProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);
	const addProduct = (productId) =>{
		setCartProducts(prev => [...prev, productId])
	}
	return (
		<CartContext.Provider value={{ cartProducts, addProduct }}>
			{children}
		</CartContext.Provider>
	);
}
