import Featured from "@/components/Featured/Featured";
import Header from "@/components/Header/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function HomePage ({product}) {
  return (
		<>
			<Header />
			<Featured product={product}/>
		</>
	);
}

export async function getServerSideProps(){
  const featuredProductId = '647487087db1fb759638e896';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: {product: JSON.parse(JSON.stringify(product))}
  };
}