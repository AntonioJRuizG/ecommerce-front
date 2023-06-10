/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import CartIcon from '../icons/CartIcon';
import style from './ProductBox.module.scss'

export default function ProductBox ({id, title, description, images, price}) {
  const uri = '/product/'+id
  return (
		<div className={style.container}>
			<Link href={uri} className={style.imgContainer}>
				<img
					className={style.img}
					width={150}
					height={150}
					src={images[0]}
					alt={title}
				></img>
			</Link>
			<div className={style.infoContainer}>
				<Link href={uri} className={style.title}>
					{title}
				</Link>
				<div className={style.shopContainer}>
					<div className={style.price}>{price}€</div>
					<PrimaryBtn type='tertiaryBtn' size='sm'>
						Add to cart
					</PrimaryBtn>
				</div>
			</div>
		</div>
	);
}