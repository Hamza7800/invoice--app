import mongoose from "mongoose";
import addressSchema from './schemas/addressSchema.js';
import itemsSchema from './schemas/itemsSchema.js';

const invoiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  customId: { type: String },
  createdAt: { type: Date },
  paymentDue: { type: Date },
  description: { type: String },
  paymentTerms: { type: Number },
  clientName: { type: String },
  clientEmail: { type: String },
  status: { type: String },
  senderAddress: addressSchema,
  clientAddress: addressSchema,
  items: [ itemsSchema ],
  total: { type: Number }
});


const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;