import Header from "@/components/Header/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import ProductBox from "@/components/ProductBox/ProductBox";

import style from '../styles/pagesStyle/products.module.scss';
import { LoadingSpin } from "@/components/SpinLoader/SpinLoader";

export default function AllProducts ({products}) {
  return (
		<>
			<Header></Header>
			<section className={style.section}>
				<h2 className={style.sectionTitle}>All products</h2>
				<div className={style.sectionGrid}>
					{products?.length > 0 ? (
						products.map((product) => (
							<ProductBox key={product.id} {...product}></ProductBox>
						))
					) : (
						<LoadingSpin></LoadingSpin>
					)}
				</div>
			</section>
		</>
	);
}

export async function getServerSideProps () {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}