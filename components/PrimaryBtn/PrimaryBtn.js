import style from "./PrimaryBtn.module.scss"

export default function PrimaryBtn ({type, children}) {
  const buttonClasses = `${style.button} ${style[type]}`;

  return <button className={buttonClasses}>{children}</button>;
}