/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import style from './ProductBox.module.scss'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/context/CartContext';
import axios from 'axios';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/router';
import AddTooFavoritesButton from '../AddToFavoritesButton/AddToFavoritesButton';

export default function ProductBox({ id, title, images, price }) {
	const route = useRouter()
	const uri = '/product/' + id;
	const { addProduct  } = useContext(CartContext);
	const { currentUser, updateUser } = useContext(UserContext);

	const [inWishList, setInWishList] = useState(false)

	useEffect(()=>{
		const inWishList = currentUser?.wishlist?.some(
			(obj) => obj.title === title
		);

		if(inWishList){
			setInWishList(true)
		}
	},[])

	const handleAddToCartClick = () => {
		addProduct(id);
	};

	const handleAddToWishListClick = async (id) => {
		if(!currentUser.name){
			route.push('/login')
			return
		}

		if (!inWishList){
			await axios
				.put('/api/wishlist', { email: currentUser.email, wishlistProduct: id, addToWishlist: true })
				.then((response) => {
					setInWishList(true);
					const updatedUser = { ...currentUser, wishlist: response.data.wishlist };
					updateUser(updatedUser);
				});
		}

		if (inWishList) {
			await axios
				.put('/api/wishlist', {
					email: currentUser.email,
					wishlistProduct: id,
					addToWishlist: false,
				})
				.then((response) => {
					setInWishList(false);
					const updatedUser = {
						...currentUser,
						wishlist: response.data.wishlist,
					};
					updateUser(updatedUser);

				});
		}
			
	};

	return (
		<div className={style.container}>
			<div>
				<AddTooFavoritesButton
					id={id}
					inWishList={inWishList}
					onClick={handleAddToWishListClick}
				></AddTooFavoritesButton>
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