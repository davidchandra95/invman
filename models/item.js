import mongoose from "mongoose";
import {modelTypes} from '../common/constants'
const { Schema } = mongoose;

const ProductItemSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 1
  },
  createdBy: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedBy: {
      type: String,
  },
  updatedDate: {
      type: Date,
      edfault: Date.now
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

const ProductSchema = new Schema({
  category: {
    type: String,
    required: "Please fill in a category name",
    trim: true
  },
  products: [ProductItemSchema],
  deleted: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model(modelTypes.PRODUCT, ProductSchema);
export const ProductItem = mongoose.model(modelTypes.PRODUCT_ITEM, ProductItemSchema);
