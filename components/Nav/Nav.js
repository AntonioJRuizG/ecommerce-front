import Link from "next/link";
import style from './Nav.module.scss'
import ShoppingBag from "../icons/ShoppingBag";
export default function Nav ({cartProducts}) {
  return (
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
			<Link className={style.navLink + ' ' + style.cartLink} href={'/cart'}>
				<ShoppingBag></ShoppingBag> <span>{cartProducts.length}</span>
			</Link>
		</nav>
	);
}