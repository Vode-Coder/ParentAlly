import { Router, Request, Response } from "express";

const router = Router();

// In-memory store (replace with database in production)
const waitlist: { email: string; joinedAt: string }[] = [];

router.post("/", (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  if (waitlist.find((entry) => entry.email === email)) {
    return res.status(409).json({ error: "Email already registered" });
  }

  waitlist.push({ email, joinedAt: new Date().toISOString() });
  console.log(`✅ New waitlist signup: ${email}`);
  
  return res.status(201).json({ message: "Successfully joined the waitlist!" });
});

router.get("/count", (_req: Request, res: Response) => {
  res.json({ count: waitlist.length });
});

export { router as waitlistRouter };
