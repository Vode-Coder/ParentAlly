import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { waitlistRouter } from "./routes/waitlist.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Routes
app.use("/api/waitlist", waitlistRouter);

app.listen(PORT, () => {
  console.log(`🚀 ParentAlly backend running on http://localhost:${PORT}`);
});
