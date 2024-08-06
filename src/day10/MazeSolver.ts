export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    // const seen: boolean[][] = new Array(maze.length).fill(
    //     new Array(maze[0].length).fill(false),
    // );
    // const seen: boolean[][] = [];
    // for (let i of maze) {
    //     seen.push(new Array(maze[0].length).fill(false));
    // }
    const seen: boolean[][] = Array(maze.length).fill(0).map(() => new Array(maze[0].length).fill(false));


    
    walk(maze, wall, start, end, seen, path);
    return path;
}

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    if (
        curr.y >= maze.length ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.x < 0
    ) {
        return false;
    }

    path.push(curr);
    seen[curr.y][curr.x] = true;

    for (let [x, y] of dir) {
        const newCurr = { x: curr.x + x, y: curr.y + y } as Point;
        if (walk(maze, wall, newCurr, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}

const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
