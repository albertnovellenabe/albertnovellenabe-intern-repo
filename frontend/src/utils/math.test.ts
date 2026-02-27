import { addNumbers } from "./math";

describe("Math Utility Functions", () => {
  it("should correctly add two numbers together", () => {
    const num1 = 5;
    const num2 = 7;

    const result = addNumbers(num1, num2);

    expect(result).toBe(12);
  });
});
