import mongoose from "mongoose";


const itemsSchema = new mongoose.Schema({
  name: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  total: { type: Number }
});


export default itemsSchema;