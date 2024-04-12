import mongoose from "mongoose";

const DATABASE_URL ="mongodb+srv://flaakko7:WNgGQpfKm6qHlX5V@cluster0.mgzc0fs.mongodb.net/?retryWrites=true&w=majority";
const DATABASE = "flaakko";

const connectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: DATABASE,
    };
    mongoose.set("strictQuery", false);
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Database Connected Successfully..");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
