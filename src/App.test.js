import data from "./data.json";
import { expect, jest, test } from "@jest/globals";

const testing = {
  name: data.name,
};

describe("testing unit tests", () => {
  test("checking for name", () => {
    expect(testing.name).toBe(data.name);
  });
});
