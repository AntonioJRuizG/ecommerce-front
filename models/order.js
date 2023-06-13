import { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
	{
		lineItems: Object,
		name: String,
		email: String,
		postalCode: String,
		street: String,
		city: String,
		country: String,
		paid: Boolean,
	},
	{
		timestamps: true,
	}
);

export const ProductOrder = models?.ProductOrder || model('ProductOrder', orderSchema);