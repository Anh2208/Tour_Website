# Tour_Booking
run npm install in three folder
run npm start at backend folder
run npm start at frontend or dashboard (only one)

username admin: admin02@example.com
password admin: admin02

// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import tourRoute from "./routes/tours.js";
// import userRoute from "./routes/users.js";
// import bookingRoute from "./routes/bookings.js";
// import authRoute from "./routes/auth.js";
// import reviewRoute from "./routes/reviews.js";

// dotenv.config();
// const app = express();
// const port = process.env.PORT || 8000;
// const corsOptions = {
//   origin: true,
//   credentials: true,
// };

// // Kết nối đến cơ sở dữ liệu đầu tiên
// const firstDBConnection = mongoose.createConnection(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Kết nối đến cơ sở dữ liệu thứ hai
// const secondDBConnection = mongoose.createConnection(process.env.MONGO_URI2, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Định nghĩa mô hình cho cơ sở dữ liệu đầu tiên (User Model)
// const userSchema = new mongoose.Schema({
//   // Định nghĩa cấu trúc dữ liệu cho User Model ở đây
// });

// // const User = firstDBConnection.model("User", userSchema);
// // const Booking = firstDBConnection.model("Booking", userSchema);
// // const Tour = secondDBConnection.model("Tour", userSchema);
// // const Review = secondDBConnection.model("Review", userSchema);

// // middleware
// app.use(express.json());
// app.use(cors(corsOptions));
// app.use(cookieParser());

// // Sử dụng các route từ các tệp khác nhau
// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/tours", tourRoute);
// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/review", reviewRoute);
// app.use("/api/v1/booking", bookingRoute);

// app.listen(port, () => {
//   console.log("Server listening on port", port);
// });






import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// import tourRoute from "./routes/tours.js";
// import userRoute from "./routes/users.js";
// import authRoute from "./routes/auth.js";
// import reviewRoute from "./routes/reviews.js";
// import bookingRoute from "./routes/bookings.js";
import { Testdata } from "./controllers/testController";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

// database connection
mongoose.set("strictQuery", false);
// Connect to the first MongoDB database
const db1 = mongoose.createConnection(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for the first connection
const Schema1 = new mongoose.Schema({
  name: String,
});

const Model1 = db1.model('Model1', Schema1);

// Connect to the second MongoDB database
const db2 = mongoose.createConnection(process.env.MONGO_URI2, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for the second connection
const Schema2 = new mongoose.Schema({
  age: Number,
});

const Model2 = db2.model('Model2', Schema2);

// Define a route to fetch data from the first connection
app.get('/data1', async (req, res) => {
  try {
    const data = await Model1.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving data from db1' });
  }
});

// Define a route to fetch data from the second connection
app.get('/data2', async (req, res) => {
  try {
    const data = await Model2.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving data from db2' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



////
// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import {db1, db2} from "./connect.js"
// // import {Model1, Model2} from "./createdb.js"

// import testRoute from "./routes/test.js"
// import authRoute from "./routes/auth.js"
// import userRoute from "./routes/users.js"
// import tourRoute from "./routes/tours.js"
// import bookingRoute from "./routes/bookings.js"
// import reviewRoute from "./routes/reviews.js"


// dotenv.config();
// const app = express();
// const port = process.env.PORT || 8000;
// const corsOptions = {
//   origin: true,
//   credentials: true,
// };

// // database connection
// mongoose.set("strictQuery", false);
// // Connect to the first MongoDB database
// // const db1 = mongoose.createConnection(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // Define a schema and model for the first connection
// // const Schema1 = new mongoose.Schema({
// //   name: String,
// // });

// // const Model1 = db1.model('Model1', Schema1);

// // Connect to the second MongoDB database
// // const db2 = mongoose.createConnection(process.env.MONGO_URI2, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // Define a schema and model for the second connection
// // const Schema2 = new mongoose.Schema({
// //   age: Number,
// // });

// // const Model2 = db2.model('Model2', Schema2);

// // Define a route to fetch data from the first connection
// // app.get('/data1', async (req, res) => {
// //   try {
// //     const data = await Model1.find();
// //     res.json(data);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error retrieving data from db1' });
// //   }
// // });

// // // Define a route to fetch data from the second connection
// // app.get('/data2', async (req, res) => {
// //   try {
// //     const data = await Model2.find();
// //     res.json(data);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error retrieving data from db2' });
// //   }
// // });

// // app.get('/data3', async (req, res) => {
// //   try {
// //     const data = await Model3.find();
// //     res.json(data);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error retrieving data from db3' });
// //   }
// // });
// app.use("/data3", testRoute);
// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/tours", tourRoute);
// app.use("/api/v1/review", reviewRoute);
// app.use("/api/v1/booking", bookingRoute);
// app.use(express.json());
// app.use(cors(corsOptions));
// app.use(cookieParser());

// // Start the server
// app.listen(port, () => {
//   console.log('Server is running on port', port);
// });