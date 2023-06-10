import Link from 'next/link';
import style from './Header.module.scss'

export default function Header() {
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
					Cart (0)
				</Link>
			</nav>
		</header>
	);
}
