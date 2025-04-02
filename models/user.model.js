import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  profilePictureUrl: {
    type: String,
  },
});

userSchema.pre('save', async function(next){
    var user = this;

    if(!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        return next();
    } catch (error) {
        return next(error);
    }
})


userSchema.methods.validatePassword = async function(password){
    return bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema);
