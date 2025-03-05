import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
import { IUser } from "../../types";
import { ObjectId } from "mongodb";

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },

    purpose: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

// We'll use cluodinary CDN for storing imageurl
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.PRIVATE_KEY, {
    expiresIn: "1d",
  });

  return token;
};
export const User = mongoose.model("user", userSchema);

export const validate = (data: object) => {
  const schemaregister = Joi.object({
    email: Joi.string().email().required().label("email"),
    purpose: Joi.string().required().label("purpose"),

    firstname: Joi.string().required().label("firstname"),

    lastname: Joi.string().required().label("lastname"),
    password: passwordComplexity().required().label("password"),
  });
  return schemaregister.validate(data);
};
export const validateLogin = (data: object) => {
  const schemalogin = Joi.object({
    email: Joi.string().required().label("email"),
    password: Joi.string().required().label("password"),
  });
  return schemalogin.validate(data);
};
