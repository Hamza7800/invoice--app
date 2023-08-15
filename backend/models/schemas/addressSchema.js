import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  postCode: { type: String },
  country: { type: String }
});

export default addressSchema;