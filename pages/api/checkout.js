import { mongooseConnect } from "@/lib/mongoose";
import { ProductOrder } from "@/models/order";
import { Product } from "@/models/product";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res){
  if(req.method !== 'POST'){
    res.json('Only post method allowed');
    return;
  }
  await mongooseConnect()
  const { userInfo, cartProducts } = req.body;

  let line_items = [];
  
  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)]
  const productsInfo = await Product.find({_id: uniqueIds})

  for(const productId of uniqueIds){
    const singleProductInfo = productsInfo.find(p=> p.id.toString() === productId);
    const quantity = productsIds.filter((id) => id === productId)?.length || 0;

    if(quantity > 0 && singleProductInfo){
      line_items.push({
        quantity,
        price_data: {
          currency: 'eur',
          product_data: { name: singleProductInfo.title },
          unit_amount: singleProductInfo.price * 100
        },
      });
    }
  }

  const orderData = await ProductOrder.create({
		lineItems: line_items,
		name: userInfo.name,
		email: userInfo.email,
		city: userInfo.city,
		postalCode: userInfo.postalCode,
		street: userInfo.street,
		country: userInfo.country,
		paid: false,
	});

  const session = await stripe.checkout.sessions.create({
		line_items,
		mode: 'payment',
		customer_email: userInfo.email,
		success_url: process.env.PUBLIC_URL + '/cart?success=1',
		cancel_url: process.env.PUBLIC_URL + '/cart?cancelled=1',
		metadata: { orderId: orderData._id.toString(), test: 'ok' },
	});

  res.json({url: session.url,})
}