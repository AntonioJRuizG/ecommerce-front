import Link from "next/link";
import style from "./PrimaryBtn.module.scss"

export default function PrimaryBtn({ btn, children, href, size, appearance, ...props}) {
	const buttonClasses = `${style.button} ${style[btn]} ${style[size]} ${style[appearance]}`;

	return href !== undefined ? (
		<Link href={href} className={buttonClasses}>
			{children}
		</Link>
	) : (
		<button className={buttonClasses} {...props}>{children}</button>
	);
}