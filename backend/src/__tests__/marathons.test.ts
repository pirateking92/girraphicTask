import request, { Response } from "supertest"; // a library for testing http endpoints
import express from "express";
import marathonRoutes from "../routes/marathons";

// create an express app for testing
const app = express();
app.use("/api/marathons", marathonRoutes);

// test suite
describe("GET /api/marathons", () => {
  it("should return marathon information, with a list of athletes and their results", async () => {
    const response: Response = await request(app).get("/api/marathons");
    expect(response.status).toBe(200);
  });
});
