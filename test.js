const numIslands=(grid)=> {
  let countIsland = 0;

  const changeToWater = (rowIn, colIn) => {
    if (
      grid[rowIn] === undefined ||
      grid[rowIn][colIn] === undefined ||
      grid[rowIn][colIn] === "0"
    )
      return;
    grid[rowIn][colIn] = "0";
    numIslands(rowIn + 1, colIn);
    numIslands(rowIn - 1, colIn);
    numIslands(rowIn, colIn + 1);
    numIslands(rowIn, colIn - 1);
   
  };

  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === "1") {
        countIsland++;
        changeToWater(parseInt(rowIndex), parseInt(colIndex));
      }
    }
  }

  console.log(countIsland);
  return countIsland;
}

numIslands(gridA);
