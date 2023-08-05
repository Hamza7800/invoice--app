import mongoose from "mongoose";
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  // passwordConfirm: { type: String, required: true },
}, { timestamps: true });


// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  } else {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

// check password for login in user
userSchema.method('matchPassword', async function (userPasswordFromReq, userPasswordFromDB) {
  return await bcrypt.compare(userPasswordFromReq, userPasswordFromDB);
});


const User = mongoose.model('User', userSchema);

export default User;