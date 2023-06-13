/* eslint-disable no-case-declarations */
import {mongooseConnect} from '@/lib/mongoose';
import {ProductOrder} from '@/models/order';
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';

const endpointSecret =
	'whsec_857902d3e42ee3838ab8fb7e2bdb1609f83932e5afec89bfe832caad2cebe362';

export default async function handler(req, res) {
	await mongooseConnect();
	const sig = req.headers['stripe-signature'];

	let event;

	try {
		event = stripe.webhooks.constructEvent(
			await buffer(req),
			sig,
			endpointSecret,
		);
	} catch (err) {
		res.status(400).send(`Webhook Error: ${err.message}`);
		return;
	}

	// Handle the event
	switch (event.type) {
	case 'checkout.session.completed':
		const data = event.data.object;
		const {orderId} = data.metadata;
		const paid = data.payment_status === 'paid';
		if (orderId && paid) {
			await ProductOrder.findByIdAndUpdate(orderId, {
				paid: true,
			});
		}

		break;
	default:
		console.log(`Unhandled event type ${event.type}`);
	}

	res.status(200).send('ok');
}

export const config = {
	api: {bodyParser: false},
};
