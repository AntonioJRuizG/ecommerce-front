import { useEffect, useState } from 'react';
import ProductBox from '../ProductBox/ProductBox'
import style from './NewProducts.module.scss'

export default function NewProducts({ newProducts }) {
	const [newestProducts, setNewestProducts] = useState([]);

	useEffect(()=>{	
				const result = newProducts?.slice(0, 4);
				setNewestProducts(result);
	},[])

	return (
		<section className={style.section}>
			<h2 className={style.sectionTitle}>New <span>products</span></h2>
			<div className={style.sectionGrid}>
				{newestProducts?.length > 0
					? newestProducts.map((newProduct) => (
							<ProductBox key={newProduct.id} {...newProduct}></ProductBox>
					  ))
					: null}
			</div>
		</section>
	);
}