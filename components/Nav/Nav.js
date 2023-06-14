import Link from "next/link";
import style from './Nav.module.scss'
import ShoppingBag from "../icons/ShoppingBag";
import { useRef } from "react";

export default function Nav ({cartProducts}) {
	const navRef = useRef(null);
	const closeBtnRef = useRef(null);

	const handleMenu = () => {
		navRef.current.classList.toggle(style.responsiveNav);
		closeBtnRef.current.classList.toggle(style.navOpenBtnAction);
	};

  return (
		<>
			<nav ref={navRef} className={style.navMenu}>
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
				<Link
					className={style.navLink + ' ' + style.cartLinkSimple}
					href={'/cart'}
				>
					Cart <span>({cartProducts.length})</span>
				</Link>
			</nav>
			<nav className={style.navSmallScreen}>
				<button ref={closeBtnRef} className={style.navBtn} onClick={handleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</nav>
			<Link className={style.cartLinkAdv} href={'/cart'}>
				<ShoppingBag></ShoppingBag> <span>{cartProducts.length}</span>
			</Link>
		</>
	);
}