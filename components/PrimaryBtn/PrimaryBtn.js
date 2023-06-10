import Link from "next/link";
import style from "./PrimaryBtn.module.scss"

export default function PrimaryBtn({ type, children, href, size}) {
	const buttonClasses = `${style.button} ${style[type]} ${style[size]}`;

	return href !== undefined ? (
		<Link href={href} className={buttonClasses}>
			{children}
		</Link>
	) : (
		<button className={buttonClasses}>{children}</button>
	);
}