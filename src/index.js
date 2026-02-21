import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(cors());

// Server running
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
