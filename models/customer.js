const { Schema, models, model } = require("mongoose");

const customerSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

customerSchema.set('toJSON', {
	transform(_document, returnedObject) {
		returnedObject.id = returnedObject._id;
		delete returnedObject.__v;
		delete returnedObject._id;
	},
});

export const Customer = models.Customer || model('Customer', customerSchema);
