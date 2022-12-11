/**
 * / (dir)
 * /a (dir)
 * /a/e (dir)
 * /a/e/i (file, size=584)
 * /a/f (file, size=29116)
 * /a/g (file, size=2557)
 * /a/h.lst (file, size=62596)
 * /b.txt (file, size=14848514)
 * /c.dat (file, size=8504156)
 * /d (dir)
 * /d/j (file, size=4060174)
 * /d/d.log (file, size=8033020)
 * /d/d.ext (file, size=5626152)
 * /d/k (file, size=7214296)
 */

export function dirFileSizes(input: string): number {
  const rows = input.trim().split("\n").map((row) => row.trim());
  const directorySizes: Record<string, number> = {};
  let pathName = "";
  let path: string[] = [];

  rows.forEach((row) => {
    const pathMatch = row.match(/\$ cd (.*)/);

    if (pathMatch) {
      pathName = pathMatch[1];

      if (pathName === "/") {
        path = ["/"];
        return;
      }

      if (pathName === "..") {
        path.pop();
        return;
      }

      path.push(pathName);

      return;
    }

    const fileSizeMatch = row.match(/\d+/);

    if (fileSizeMatch) {
      const fileSize = fileSizeMatch[0];
      let pathKey = "";

      for (let i = 0; i < path.length; i++) {
        pathKey = pathKey + path[i] + (i > 0 ? "/" : "");

        if (!directorySizes[pathKey]) {
          directorySizes[pathKey] = 0;
        }

        directorySizes[pathKey] += parseInt(fileSize);
      }
    }
  });

  const sizeValues = Object.values(directorySizes);

  const filteredSizeValues = sizeValues.filter((size) => size <= 100000);

  return filteredSizeValues.reduce(
    (accumulator, size) => accumulator + size,
    0,
  );
}

const input = await Deno.readTextFile("./input.txt");
console.log(dirFileSizes(input));
