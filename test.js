const numIslands = (grid) => {
  let countIsland = 0;

  const checkIslands = (rowIn, colIn) => {
    if (
      grid[rowIn] === undefined ||
      grid[rowIn][colIn] === undefined ||
      grid[rowIn][colIn] === "0"
    )
      return;
    grid[rowIn][colIn] = "0";
    checkIslands(rowIn + 1, colIn);
    checkIslands(rowIn - 1, colIn);
    checkIslands(rowIn, colIn + 1);
    checkIslands(rowIn, colIn - 1);
  };
  

  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === "1") {
        countIsland++;
        checkIslands(parseInt(rowIndex), parseInt(colIndex));
      }
    }
  }
  return countIsland;
};

numIslands(gridA);
