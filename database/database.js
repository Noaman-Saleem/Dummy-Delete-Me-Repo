import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://nomi:12345@cluster0.iolgnbu.mongodb.net/umtFacultyManagement?appName=Cluster0`,
    );
    console.log(`Connected to MongoDB Cluster`);
  } catch (error) {
    console.log(error);
    console.log(`OH NO ERROR`);
  }
};

export default connectDB;
