import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser {
  username: string;
  password: string;
}

export interface IUserSchema extends IUser, Document {
  correctPassword(password: string, hashPassword: string): boolean;
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password.'],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<IUserSchema>('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function (
  password: string,
  hashPassword: string
) {
  return await bcrypt.compare(password, hashPassword);
};

const userModel = mongoose.model<IUserSchema>('User', userSchema);

export default userModel;
