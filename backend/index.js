import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import {db1, db2} from "./connect.js"
// import {Model1, Model2} from "./createdb.js"

// import testRoute from "./routes/test.js"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import tourRoute from "./routes/tours.js"
import bookingRoute from "./routes/bookings.js"
import reviewRoute from "./routes/reviews.js"

//check connect to database 1
db1.on("error", (error) => {
  console.error("Error connect to database 1. Try again!!!", error);
});

db1.once("open", () => {
  console.log("Database 1 connected success!");
});
//check connect to database 2
db2.on("error", (error) => {
  console.error("Error connect to database 2. Try again!!!", error);
});

db2.once("open", () => {
  console.log("Database 2 connected success!");
});

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

// database connection
mongoose.set("strictQuery", false);
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
// app.use("/data3", testRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);


// Start the server
app.listen(port, () => {
  console.log('Server is running on port', port);
});





// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import tourRoute from "./routes/tours.js";
// import userRoute from "./routes/users.js";
// import authRoute from "./routes/auth.js";
// import reviewRoute from "./routes/reviews.js";
// import bookingRoute from "./routes/bookings.js";

// dotenv.config();
// const app = express();
// const port = process.env.PORT || 8000;
// const corsOptions = {
//   origin: true,
//   credentials: true,
// };

// // database connection
// mongoose.set("strictQuery", false);
// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("MongoDB database connected");
//   } catch (err) {
//     console.log("MongoDB database connection failed");
//   }
// };

// // middleware
// app.use(express.json());
// app.use(cors(corsOptions));
// app.use(cookieParser());
// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/tours", tourRoute);
// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/review", reviewRoute);
// app.use("/api/v1/booking", bookingRoute);

// app.listen(port, () => {
//   connect();
//   console.log("server listening on port", port);
// });

