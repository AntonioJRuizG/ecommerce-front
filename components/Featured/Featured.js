/* eslint-disable @next/next/no-img-element */
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import style from './Featured.module.scss'

export default function Featured ({product}) {
  return (
		<section className={style.section}>
			<div>
				<h1 className={style.sectionTitle}>{product.title}</h1>
				<p className={style.sectionText}>{product.description}</p>
				<div className={style.sectionBtns}>
					<PrimaryBtn
						href={'/products/'+product.id}
						type='primaryBtn'
					>
						Read more
					</PrimaryBtn>
					<PrimaryBtn type='secondaryBtn'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-5 h-5'
						>
							<path
								fillRule='evenodd'
								d='M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z'
								clipRule='evenodd'
							/>
						</svg>
						Add to cart
					</PrimaryBtn>
				</div>
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