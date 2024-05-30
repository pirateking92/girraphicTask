import express from "express";
import cors from "cors";
import { json } from "body-parser";
import athleteRoutes from "./routes/marathons";

const app = express();

app.use(cors());
app.use(json());

app.use("/api/marathons", athleteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
