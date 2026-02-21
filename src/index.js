import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import userRoute from "./routes/userRouter.js";

const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoute);

// Error handler
app.use(errorHandler);

// Testing postgres connection
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT current_database()");
    res.send(`Database name is: ${result.rows[0].current_database}`);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error connecting to database");
  }
});

// Server running
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
