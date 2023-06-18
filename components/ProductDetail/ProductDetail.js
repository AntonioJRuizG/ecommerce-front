/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

import style from './ProductDetail.module.scss'
import CartIcon from "../icons/CartIcon";
import ProductImages from "../ProductImages/ProductImages";
import AddToFavoritesButton from "../AddToFavoritesButton/AddToFavoritesButton";

export default function ProductDetail ({id, title, description, images, price}){
	const {addProduct} = useContext(CartContext)
	const handleAddToCartClick = () => {
		addProduct(id)
	}

  return (
		<div className={style.container}>
			<ProductImages images={images} title={title}></ProductImages>
			<div className={style.infoContainer}>
				<div className={style.title}>{title}</div>
				<div className={style.description}>{description}</div>
				<div className={style.shopContainer}>
					<div className={style.price}>{price}€</div>
						<PrimaryBtn
							btn='tertiaryBtn'
							size='sm'
							onClick={handleAddToCartClick}
						>
							<CartIcon></CartIcon> Add to cart
						</PrimaryBtn>
						<AddToFavoritesButton id={id} title={title} form='square' text={true}></AddToFavoritesButton>
				</div>
			</div>
		</div>
	);
}