/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useContext } from "react";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

import style from './ProductDetail.module.scss'
import CartIcon from "../icons/CartIcon";

export default function ProductDetail ({id, title, description, images, price}){
const {addProduct} = useContext(CartContext)
	const handleAddToCartClick = () => {
		addProduct(id)
	}
  return (
		<div className={style.container}>
			<div className={style.imgContainer}>
				<img
					className={style.img}
					width={300}
					height={300}
					src={images[0]}
					alt={title}
				></img>
			</div>
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
					<CartIcon></CartIcon>	Add to cart
					</PrimaryBtn>
				</div>
			</div>
		</div>
	);
}