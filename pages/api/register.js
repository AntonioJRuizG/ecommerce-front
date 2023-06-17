import { mongooseConnect } from "@/lib/mongoose";
import { Customer } from "@/models/customer";

export default async function handle(req, res) {
  const { method } = req;
	await mongooseConnect();

  if (method === 'POST'){
 		const { customerData } = req.body;
		const customerExists = await Customer.find({ email: customerData.email });
		if (customerExists.length !== 0){
			res.json('customerExists')
		}

		if (customerExists.length === 0) {
			const userData = await Customer.create({
				name: customerData.name,
				password: customerData.password,
				email: customerData.email,
				wishlist: null
			});
			res.json(userData);
		}
	}
}
