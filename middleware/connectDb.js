import mongoose from "mongoose";

const uri = process.env.MONGODB_URI

const connectDb = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(uri)
  return handler(req, res);
}

export default connectDb;