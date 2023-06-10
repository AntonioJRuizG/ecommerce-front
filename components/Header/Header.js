import Link from 'next/link';
import style from './Header.module.scss'
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

export default function Header() {
	const{cartProducts} = useContext(CartContext);
	console.log(cartProducts);
	return (
		<header className={style.section}>
			<Link className={style.sectionTitle} href={'/'}>
				e-Commerce
			</Link>
			<nav className={style.navMenu}>
				<Link className={style.navLink} href={'/'}>
					Home
				</Link>
				<Link className={style.navLink} href={'/products'}>
					All products
				</Link>
				<Link className={style.navLink} href={'/categories'}>
					Categories
				</Link>
				<Link className={style.navLink} href={'/account'}>
					Account
				</Link>
				<Link className={style.navLink} href={'/cart'}>
					Cart ({cartProducts.length})
				</Link>
			</nav>
		</header>
	);
}
