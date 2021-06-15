import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      max: 256,
    },
    price: {
      type: Number,
    },
    company: {
      type: String,
      max: 256,
    },
    description: {
      type: String,
      max: 1000,
    },
    colors: {
      type: Array,
      default: [],
    },
    img_full: {
      type: String,
      max: 256,
    },
    img_large: {
      type: String,
      max: 256,
    },
    img_small: {
      type: String,
      max: 256,
    },
    amount: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export default model("Product", productSchema);
