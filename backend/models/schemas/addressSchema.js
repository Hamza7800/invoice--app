import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  postCode: { type: String, required: true },
  country: { type: String, required: true }
});

export default addressSchema;