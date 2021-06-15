import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      min: 2,
      max: 20,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 6,
    },
    cart: {
      cartList: { type: Array, default: [] },
      total: { type: Number, default: 0 },
      amount: { type: Number, default: 0 },
    },
    wishlist: {
      type: Array,
      default: [],
    },
    messages: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
