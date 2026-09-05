import express from "express";
import "dotenv/config";
import type { Request, Response } from "express";
import { prisma } from "@repo/database/prisma";
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hi there!");
});

app.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password cannot be empty.",
    });
  }

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });

    res.status(201).json({
      message: "Account created successfully",
      id: user.id,
    });
  } catch (e) {
    console.error("Error while signing up!", e);
    res.status(500).json({
      message: "Internal server error.",
    });
  }
});

app.listen(3001, () => {
  console.log("Server is started!");
});
