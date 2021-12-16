import { Sudoku } from "./../src/sudokuchecker.js";

describe("Sudoku", () => {
  let sudoku;
  beforeEach(() => {
    sudoku = new Sudoku();
  });
  test("should correctly create a sudoku", () => {
    expect(sudoku.rows[0]).toEqual([5, 3, 0, 0, 7, 0, 0, 0, 0]);
  });
  test("should correctly create columns our of rows", () => {
    sudoku.addColumns();
    expect(sudoku.columns[0]).toEqual([5, 6, 0, 8, 4, 7, 0, 0, 0]);
  });
  // test("should not repeat numbers 1-9 in a row", ()=> {
  //   sudoku.repeatNumberRow(); 
  //   expect(sudoku.rows[0]).toBe(false);
  // });
  test("should correctly create a grid of 3x3", () => {
    sudoku.addGrids();
    expect(sudoku.grids[0]).toEqual([5, 3, 0, 6, 0, 0, 0, 9, 8]);
  });
  test("should transform first three rows into three 3x3 grids and return first grid", () => {
    sudoku.addGrids();
    expect(sudoku.grids[0]).toEqual([5, 3, 0, 6, 0, 0, 0, 9, 8]);
  });
  test("should transform first three rows into three 3x3 grids and return second grid", () => {
    sudoku.addGrids();
    expect(sudoku.grids[1]).toEqual([0, 7, 0, 1, 9, 5, 0, 0, 0]);
  });
  // test("should transform first three rows into three 3x3 grids and return first grid", () => {
  //   sudoku.addGrids();
  //   expect(sudoku.grids[0]).toEqual([5, 3, 0, 6, 0, 0, 0, 9, 8]);
  // });
});