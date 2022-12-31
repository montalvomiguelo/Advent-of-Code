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

  const totalSpace = 70000000;
  const requiredSpace = 30000000;
  const sizeValues = Object.values(directorySizes).sort((a, b) => a - b);
  const usedSpace = sizeValues[sizeValues.length - 1];
  const availableSpace = totalSpace - usedSpace;

  for (let i = 0; i < sizeValues.length; i++) {
    const size = availableSpace + sizeValues[i];

    if (size >= requiredSpace) {
      return sizeValues[i];
    }
  }

  return 0;
}

const input = await Deno.readTextFile("./input.txt");
console.log(dirFileSizes(input));
