import { hello } from "..";

describe("hi function", () => {
	it("says hello", () => {
		let test = hello();
		expect(test).toBeDefined;
		expect(test).toBe("Hello World!");
	});
});
