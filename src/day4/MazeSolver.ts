export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path = new Array() as Point[];
    const visited = new Array(maze.length);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(maze[0].length).fill(false) as boolean[];
    }
    walk(maze, wall, end, start, visited, path);

    return path;
}

function walk(
    maze: string[],
    wall: string,
    end: Point,
    curr: Point,
    visited: boolean[][],
    path: Point[],
): boolean {
    if (curr.y == end.y && curr.x == end.x) {
        path.push(curr);
        return true;
    }
    if (
        curr.y >= maze.length ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.x < 0
    )
        return false;
    if (maze[curr.y][curr.x] === wall) return false;
    if (visited[curr.y][curr.x]) return false;

    path.push(curr);
    visited[curr.y][curr.x] = true;

    const dir = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        const newCurr = { x: curr.x + x, y: curr.y + y } as Point;
        if (walk(maze, wall, end, newCurr, visited, path)) {
            //initially went with if(!walk) continue, this wrong as the true case was never returned to the parent calls
            return true;
        }
    }

    path.pop();

    return false;
}
