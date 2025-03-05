import { Router } from "express";
import { User, validate } from "../models/user.model";
import bcrypt from "bcrypt";
export const router = Router();

//@ts-ignore
router.route("/register").post(async (req, res) => {
  try {
    const { error } = validate({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      purpose: req.body.purpose,
      password: req.body.password,
    });

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "user with given email already exists" });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({
      ...req.body,
      password: hashPassword,
    }).save();

    return res.status(200).send({
      message: "user Created successfully",
    });
  } catch (error: any) {
    console.log("An error occurred", error);
    if (error && error._message) {
      return res.status(500).send({ message: error?._message });
    }
    if (error & error.response) {
      return res.status(500).send({ message: error.response.data });
    } else if (error & error.message) {
      return res.status(500).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "Internal Server Error!" });
    }
  }
});
