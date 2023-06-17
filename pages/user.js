import Header from '@/components/Header/Header';

import style from '../styles/pagesStyle/user.module.scss';
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/router';
import PrimaryBtn from '@/components/PrimaryBtn/PrimaryBtn';
import { CartContext } from '@/context/CartContext';

export default function UserPage() {
	const router = useRouter();
	const { currentUser, removeUser } = useContext(UserContext);
	const { clearCart } = useContext(CartContext);

  const handleLogoutClick = () => {
    removeUser();
		clearCart();
		router.push('/login');
	};

  const handleWishlistClick = () => {
    router.push('/wishlist');
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

	return (
		<>
			<Header></Header>
			<section className={style.section}>
				<div className={style.sectionUserInfo}>
					<h2 className={style.sectionTitle}>Hello, {currentUser.name}</h2>
					<PrimaryBtn onClick={handleCartClick} btn='secondaryBtn'>
						Your cart
					</PrimaryBtn>
					<PrimaryBtn onClick={handleWishlistClick} btn='secondaryBtn'>
						Your wishlist
					</PrimaryBtn>
					<PrimaryBtn onClick={handleLogoutClick} btn='tertiaryBtn'>
						Log out
					</PrimaryBtn>
				</div>
			</section>
		</>
	);
}
