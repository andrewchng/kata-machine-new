function walk(
    maze: string[],
    wall: string,
    end: Point,
    curr: Point,
    touched: boolean[][],
    path: Point[],
): boolean {
    if (curr.x == end.x && curr.y == end.y) {
        path.push(curr);
        return true;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (curr.y >= maze.length || curr.x >= maze[0].length) {
        return false;
    }

    if (touched[curr.y][curr.x]) {
        return false;
    }

    touched[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i];
        const nextCur = {
            x: curr.x + x,
            y: curr.y + y,
        };
        if (walk(maze, wall, end, nextCur, touched, path)) {
            return true;
        }
    }

    //deadend, return

    path.pop;

    return false;
}

const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let path: Point[] = [];
    let touched: boolean[][] = [];
    for (let i = 0; i < maze.length; i++) {
        touched[i] = new Array(maze[0].length).fill(false);
    }

    walk(maze, wall, end, start, touched, path);

    return path;
}
