import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  userName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
},{timestamps:true});

const userModal = mongoose.model("User", UserSchema);
export default userModal;
