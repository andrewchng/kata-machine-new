# MazeSolver

## What it asks

Find a path through a maze from `start` to `end`. The maze is an array of strings. `wall` is the character that blocks a cell (`"x"` in the test). Return the path as an array of `{ x, y }` points, including start and end.

```ts
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[]
```

`Point` is `{ x: number; y: number }`. `x` is the column, `y` is the row: the cell is `maze[y][x]`.

## Pattern

**Graph DFS / backtracking.** Spot it when a grid is a graph, and you try a path, then back up at a dead end.

One-line picture: walking a maze with a piece of string. If you hit a wall, you rewind and try another turn.

## How to run

```bash
npx jest MazeSolver
```

## Hints

<details>
<summary>Nudge</summary>

From the current cell, try the four directions (up, right, down, left). Skip walls, out-of-bounds cells, and cells you have already visited. When you reach `end`, the path you walked is the answer. The test maze has only one path.
</details>

<details>
<summary>Approach</summary>

Recurse with a `seen` grid and a `path` array. Before you explore a cell, mark it seen and push it onto `path`. If it is the end, return true. If every direction fails, pop the cell off `path` (that is the backtrack) and return false. Start the recursion at `start`.
</details>

<details>
<summary>Pseudocode</summary>

```
dirs = (0, 1), (1, 0), (0, -1), (-1, 0)   # down, right, up, left

walk(current):
    if current is out of bounds or maze[y][x] is wall or already seen:
        return false
    path.push(current)
    seen[y][x] = true
    if current equals end:
        return true
    for each dir:
        if walk(current + dir): return true
    path.pop()        # dead end, backtrack
    return false

solve(...):
    path = []
    walk(start)
    return path
```
</details>

## Edge cases to check

- The test path starts at `{ x: 10, y: 0 }` and ends at `{ x: 1, y: 5 }`, and includes every step in between.
- Do not walk through `"x"` or off the map.
- Include both `start` and `end` in the returned path.
- A cell must not be visited twice, or you can loop forever.

## Complexity

- Time: **O(n · m)**
- Space: **O(n · m)**

Each cell is visited at most once. The `seen` grid and the recursion / path can both grow to the size of the maze.

## Common mistakes

- Swapping `x` and `y` (`maze[y][x]`, not the other way around).
- Forgetting a `seen` set, which can recurse forever.
- Forgetting to pop on a dead end, so the returned path includes failed branches.
- Leaving `start` or `end` off the path.
- Mutating the maze strings in place in a way that breaks later checks (a separate `seen` grid is safer).
