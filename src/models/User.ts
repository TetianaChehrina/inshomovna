import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

userSchema.methods.comparePassword = function (candidatePassword: string) {
  if (!this.passwordHash) return false;
  return bcrypt.compare(candidatePassword, this.passwordHash);
};

const User = models.User || model("User", userSchema);
export default User;
