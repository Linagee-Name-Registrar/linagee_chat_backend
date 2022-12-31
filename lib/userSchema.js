import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    profileId: {
      type: String,
    },
    bio: {
      type: String,
      default: "This is my Bio",
    },
    ext: {
      type: String,
      default: "null",
    },
    addr: {
      type: String,
    },
    primary: {
      type: String,
    },
  },
  { timestamps: true }
);

let Users = mongoose.models.users || mongoose.model("users", userSchema);

export default Users;
