import ProductBox from '../ProductBox/ProductBox'
import style from './NewProducts.module.scss'

export default function NewProducts ({newProducts}){
  return (
		<section className={style.section}>
			<h1 className={style.sectionTitle}>New products</h1>
			<div className={style.sectionGrid}>
				{newProducts?.length > 0
					? newProducts.map((newProduct) => (
							<ProductBox key={newProduct.id} {...newProduct}></ProductBox>
					  ))
					: null}
			</div>
		</section>
	);
}