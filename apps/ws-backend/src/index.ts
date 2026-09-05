import { WebSocketServer } from "ws";
import "dotenv/config";
import { prisma } from "@repo/database/prisma";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (socket) => {
  await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.send("you are connected to the wss server");
});
