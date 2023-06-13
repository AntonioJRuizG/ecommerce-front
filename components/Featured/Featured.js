/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import CartIcon from '../icons/CartIcon';
import style from './Featured.module.scss'
import { CartContext } from '@/context/CartContext';

export default function Featured ({product}) {
	const { addProduct } = useContext(CartContext);

	const handleAddToCart = () => {
		addProduct(product.id);
	};

  return (
		<section className={style.section}>
			<div>
				<h1 className={style.sectionTitle}>{product.title}</h1>
				<p className={style.sectionText}>{product.description}</p>
				<div className={style.sectionBtns}>
					<PrimaryBtn href={'/products/' + product.id} btn='primaryBtn'>
						Read more
					</PrimaryBtn>
					<PrimaryBtn btn='secondaryBtn' onClick={handleAddToCart}>
						<CartIcon></CartIcon>
						Add to cart
					</PrimaryBtn>
				</div>
			</div>
			<div className={style.sectionImgContainer}>
				<img
					className={style.sectionImg}
					src='https://firebasestorage.googleapis.com/v0/b/next-ecommerce-fdf78.appspot.com/o/products%2FIphone%2014-3306?alt=media&token=c5bb9734-d6c5-40b3-a5ad-715693cae0e1'
					alt='Featured product'
					width={300}
					height={300}
				></img>
			</div>
		</section>
	);
}