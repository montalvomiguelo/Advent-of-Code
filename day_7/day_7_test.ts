import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { dirFileSizes } from "./day_7.ts";

Deno.test("Day 7: No Space Left On Device", () => {
  const input = `
    $ cd /
    $ ls
    dir a
    14848514 b.txt
    8504156 c.dat
    dir d
    $ cd a
    $ ls
    dir e
    29116 f
    2557 g
    62596 h.lst
    $ cd e
    $ ls
    584 i
    $ cd ..
    $ cd ..
    $ cd d
    $ ls
    4060174 j
    8033020 d.log
    5626152 d.ext
    7214296 k
  `;

  // Part 1
  assertEquals(dirFileSizes(input), 95437);
});
