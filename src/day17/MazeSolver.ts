export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = new Array(maze.length)
    for (let i = 0; i < seen.length; i++) {
        seen[i] = new Array(maze[0].length).fill(false);
    }
    walk(maze, wall, start, end, seen, path);

    return path;
}

const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

function walk(maze: string[], wall: string, cur: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    if (cur.x === end.x && cur.y === end.y) {
        path.push(cur);
        return true;
    }

    if (cur.y >= maze.length || cur.y < 0 || cur.x >= maze[0].length || cur.x < 0) {
        return false;
    }

    if (maze[cur.y][cur.x] === wall) {
        return false;
    }

    if (seen[cur.y][cur.x]) {
        return false;
    }

    seen[cur.y][cur.x] = true;
    path.push(cur);

    for (const [x, y] of dir) {
        if (walk(maze, wall, { x: cur.x + x, y: cur.y + y } as Point, end, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}

