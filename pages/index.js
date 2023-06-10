import Featured from "@/components/Featured/Featured";
import Header from "@/components/Header/Header";
import NewProducts from "@/components/NewProducts/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function HomePage({ featuredProduct, newProducts }) {
	return (
		<>
			<Header />
			<Featured product={featuredProduct} />
			<NewProducts newProducts={newProducts} />
		</>
	);
}

export async function getServerSideProps(){
  const featuredProductId = '647487087db1fb759638e896';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);

  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit: 10})
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    },
  };
}