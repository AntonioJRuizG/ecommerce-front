import { mongooseConnect } from '@/lib/mongoose';
import { Customer } from '@/models/customer';

export default async function handle(req, res) {
	const { method } = req;
	await mongooseConnect();

	if (method === 'PUT') {
		const { email, wishlistProduct, addToWishlist } = req.body;

		if(addToWishlist){
			const productDoc = await Customer.findOneAndUpdate(
				{ email: email },
				{ $push: { wishlist: wishlistProduct } },
				{ new: true }
			).populate('wishlist');
			res.json(productDoc);
		}

		if (!addToWishlist) {
			const productDoc = await Customer.findOneAndUpdate(
				{ email: email },
				{ $pull: { wishlist: wishlistProduct } },
				{ new: true }
			).populate('wishlist');
			res.json(productDoc);
		}
	}
}
