import { mongooseConnect } from '@/lib/mongoose';
import { Customer } from '@/models/customer';
import { Product } from '@/models/product';

export default async function handle(req, res) {
	const { method } = req;
	await mongooseConnect();

	if (method === 'POST') {
		const { customerData } = req.body;
		const customerExists = await Customer.find({
			email: customerData.email,
		}).populate({path: 'wishlist', model: Product});

    if (customerExists.length === 0 || customerData.password !== customerExists[0]?.password) {
			res.json(false);
		}

		if (customerExists.length !== 0) {
			res.json(customerExists);
		}
	}
}
