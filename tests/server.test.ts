import request from "supertest";
import { app } from "./../src/server";

describe("Server Tests", () => {
	it('"/" Should return OK', async (done) => {
		await request(app).get("/").expect(200);
		done();
	});
});
