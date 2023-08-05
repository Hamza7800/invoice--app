import mongoose from "mongoose";


const itemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number, required: true }
});


export default itemsSchema;