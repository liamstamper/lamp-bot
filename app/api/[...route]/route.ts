import { Hono } from "hono";
import { handle } from "hono/vercel";
export const dynamic = "force-dynamic";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono on Vercel!",
  });
});

app.post("/webhook", async (c) => {
  const payload = await c.req.json();
  if (payload.pull_request) {
    return c.json({ message: "PR event received" });
  }
  if (payload.commits) {
    return c.json({ message: "Commit event received" });
  }
  return c.json({ message: "Unhandled event" });
});

export const GET = handle(app);
