import Link from 'next/link';
import style from './Header.module.scss'
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Nav from '../Nav/Nav';

export default function Header() {
	const{cartProducts} = useContext(CartContext);
	return (
		<header className={style.section}>
			<Link className={style.sectionTitle} href={'/'}>
				e-Commerce
			</Link>
			<Nav cartProducts={cartProducts}></Nav>
		</header>
	);
}
