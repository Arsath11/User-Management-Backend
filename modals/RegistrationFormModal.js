import mongoose from "mongoose";

const RegistrationSchema = mongoose.Schema(
  {
    userName: {
      required: true,
      type: String,
    },
    mobileNo: {
      type: String,
    },
    age: {
      type: String,
    },
    gender: {
      type: String,
    },
    country: {
      type: String,
    },
    address: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    dateofBirth: {
      type: String,
    },
    languages: {
      type: Array,
    },
  },
  { timestamps: true }
);

const registerModal = mongoose.model("RegisterUser", RegistrationSchema);
export default registerModal;
