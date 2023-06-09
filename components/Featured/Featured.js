/* eslint-disable @next/next/no-img-element */
import style from './Featured.module.scss'

export default function Featured () {
  return (
		<section className={style.section}>
			<div>
				<h1 className={style.sectionTitle}>Product</h1>
				<p className={style.sectionText}>Description for the product</p>
        <button>Read more</button>
        <button>Add to cart</button>
			</div>
			<div>
				<img
					className={style.sectionImg}
					src='https://firebasestorage.googleapis.com/v0/b/next-ecommerce-fdf78.appspot.com/o/products%2FIphone%2014-3306?alt=media&token=c5bb9734-d6c5-40b3-a5ad-715693cae0e1'
					alt='Featured product'
				></img>
			</div>
		</section>
	);
}