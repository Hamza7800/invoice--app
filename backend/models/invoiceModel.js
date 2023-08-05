import mongoose from "mongoose";
import addressSchema from './schemas/addressSchema.js';
import itemsSchema from './schemas/itemsSchema.js';

const invoiceSchema = new mongoose.Schema({

  createdAt: { type: Date, required: true },
  paymentDue: { type: Date, required: true },
  description: { type: String, required: true },
  paymentTerms: { type: Number, required: true },
  clientName: { type: String, required: true },
  clientEmail: { type: String },
  status: { type: String, required: true },
  senderAddress: addressSchema,
  clientAddress: addressSchema,
  items: [ itemsSchema ],
  total: { type: Number, required: true }
});


const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;