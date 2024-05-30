import request, { Response } from "supertest"; // a library for testing http endpoints
import express from "express";
import marathonRoutes from "../routes/marathons";

// create an express app for testing
const app = express();
app.use("/api/marathons", marathonRoutes);

// test suite
describe("GET /api/marathons", () => {
  it("should return marathon information, with a list of athletes and their results", async () => {
    // have to explicity annotate response with Response so that TS doesnt have any errors.
    // was working beforehand, but wanted it to look better
    const response: Response = await request(app).get("/api/marathons");
    expect(response.status).toBe(200);
    console.log(response.body[0]);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("raceStatus");
    expect(response.body).toHaveProperty("gender");
    expect(response.body).toHaveProperty("racename");
    expect(response.body).toHaveProperty("tod");
    expect(response.body).toHaveProperty("lastupdated");
    expect(response.body).toHaveProperty("racelength");
    expect(response.body).toHaveProperty("athletes");
    expect(response.body.athletes).toBeInstanceOf(Array);
    expect(response.body.athletes.length).toBeGreaterThan(0);
    expect(response.body.athletes[0]).toHaveProperty("rank");
  });
});
