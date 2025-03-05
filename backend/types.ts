import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  purpose: string;

  generateAuthToken: () => string;
}

export default interface CustomRequest extends Request {
  user?: any; // Define the 'user' property
  file?: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
  };
}
