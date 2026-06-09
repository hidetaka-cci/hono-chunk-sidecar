import { SELF } from "cloudflare:test";
import { describe, expect, it } from "vitest";

describe("GET /", () => {
	it("returns Hello Hono!", async () => {
		const res = await SELF.fetch("http://localhost/");
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello Hono!");
	});
});
