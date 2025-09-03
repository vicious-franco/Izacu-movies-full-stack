import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CLOUD_CONN_STR);
    console.log(mongoose.connection.name);
  } catch (err) {
    console.error(err);
  }
};
