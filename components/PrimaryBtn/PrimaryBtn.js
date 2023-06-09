import style from "./PrimaryBtn.module.scss"

export default function PrimaryBtn({ type, children, href}) {
	const buttonClasses = `${style.button} ${style[type]}`;
	return <button href={href} className={buttonClasses}>{children}</button>;
}