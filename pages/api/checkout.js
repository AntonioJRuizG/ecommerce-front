import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handler(req, res){
  if(req.method !== 'POST'){
    res.json('Only post method allowed')
  }
  await mongooseConnect()
  const { userInfoname, cartProducts, products } = req.body;
  let lineItems = [];
  if(typeof(products) === 'string'){
    const productsIds = products.split(',');
    const uniqueIds = [...new Set(productsIds)]
    const productsInfo = await Product.find({_id: uniqueIds})

    
    for(const productId of uniqueIds){
      const singleProductInfo = productsInfo.find(p=> p.id.toString() === productId);
      const quantity = productsIds.filter((id) => id === productId)?.length || 0;

      if(quantity > 0 && singleProductInfo){
        lineItems.push({
          quantity,
          priceData: {
            currency: 'EURO',
            productData: { name: singleProductInfo.title },
            unitAmount: quantity * singleProductInfo.price
          },
        });
      }
    }
 }
 res.json({lineItems})
}