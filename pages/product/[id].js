import Header from "@/components/Header/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

export default function ProductPage({ product }) {
	return (
		<>
			<Header></Header>
      <ProductDetail {...product}></ProductDetail>		</>
	);
}

export async function getServerSideProps(context) {
	await mongooseConnect();
	const { id } = context.query;
	const product = await Product.findById(id);
	return {
		props: {
			product: JSON.parse(JSON.stringify(product)),
		},
	};
}