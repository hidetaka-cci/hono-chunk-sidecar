import { SELF } from "cloudflare:test";
import { describe, it, expect } from "vitest";

describe("Worker", () => {
  it("GET / returns Hello Hono!", async () => {
    const response = await SELF.fetch("http://localhost/");
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("Hello Hono!");
  });
});
