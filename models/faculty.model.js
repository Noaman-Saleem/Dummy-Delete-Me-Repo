import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    employeeCode: {
      type: String,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    salary: {
      type: Number,
      default: 25000,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  },
);

const Faculty = mongoose.model("employee", facultySchema);

export default Faculty;
