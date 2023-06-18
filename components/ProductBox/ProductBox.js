/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import style from './ProductBox.module.scss'
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import AddToFavoritesButton from '../AddToFavoritesButton/AddToFavoritesButton';

export default function ProductBox({ id, title, images, price }) {
	const uri = '/product/' + id;
	const { addProduct  } = useContext(CartContext);

	const handleAddToCartClick = () => {
		addProduct(id);
	};

	return (
		<div className={style.container}>
			<div>
				<AddToFavoritesButton
					id={id}
					title={title}
					form='rounded'
				></AddToFavoritesButton>
			</div>
			<Link href={uri} className={style.imgContainer}>
				<img
					className={style.img}
					width={150}
					height={150}
					src={images[0]}
					alt={title}
				></img>
			</Link>
			<div className={style.infoContainer}>
				<Link href={uri} className={style.title}>
					{title}
				</Link>
				<div className={style.shopContainer}>
					<div className={style.price}>{price}€</div>
					<PrimaryBtn
						btn='tertiaryBtn'
						size='sm'
						onClick={handleAddToCartClick}
					>
						Add to cart
					</PrimaryBtn>
				</div>
			</div>
		</div>
	);
}