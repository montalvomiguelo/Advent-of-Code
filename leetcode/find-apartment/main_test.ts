import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { findApartment } from "./main.ts";

Deno.test("Find Apartment", () => {
  const blocks = [
    {
      "gym": false,
      "school": true,
      "store": false,
    },
    {
      "gym": true,
      "school": false,
      "store": false,
    },
    {
      "gym": true,
      "school": true,
      "store": false,
    },
    {
      "gym": false,
      "school": true,
      "store": false,
    },
    {
      "gym": false,
      "school": true,
      "store": true,
    },
  ];

  const requirements = ["gym", "school", "store"];

  assertEquals(findApartment(blocks, requirements), 3);
});
