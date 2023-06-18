/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import HeartIcon from "../icons/Heart";
import style from './AddToFavoritesButton.module.scss';
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import axios from "axios";

export default function AddTooFavoritesButton({ id, title }) {
  const route = useRouter()
  const { currentUser, updateUser } = useContext(UserContext);
  const [inWishList, setInWishList] = useState(false);

  useEffect(() => {
    const inWishList = currentUser?.wishlist?.some((obj) => obj.title === title);

    if (inWishList) {
      setInWishList(true);
    }
  }, []);

	const handleAddToWishListClick = async (id) => {
		if (!currentUser.name) {
			route.push('/login');
			return;
		}

		if (!inWishList) {
			await axios
				.put('/api/wishlist', {
					email: currentUser.email,
					wishlistProduct: id,
					addToWishlist: true,
				})
				.then((response) => {
					setInWishList(true);
					const updatedUser = {
						...currentUser,
						wishlist: response.data.wishlist,
					};
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
		<button
			className={style.favouriteButton}
			onClick={() => handleAddToWishListClick(id)}
		>
			<HeartIcon solid={inWishList}></HeartIcon>
		</button>
	);
}
