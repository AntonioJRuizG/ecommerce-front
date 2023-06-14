import { useEffect, useState } from 'react';
import ProductBox from '../ProductBox/ProductBox'
import style from './NewProducts.module.scss'

export default function NewProducts({ newProducts }) {
	return (
		<section className={style.section}>
			<h2 className={style.sectionTitle}>
				New <span>products</span>
			</h2>
			<div className={style.sectionGrid}>
				{newProducts?.length > 0
					? newProducts
							.slice(0, 4)
							.map((newProduct) => (
								<ProductBox key={newProduct.id} {...newProduct}></ProductBox>
							))
					: null}
			</div>
		</section>
	);
}