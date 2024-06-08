import { matrix2 } from "__tests__/graph";
import { transform } from "typescript";

const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

function walk(
    maze: string[],
    wall: string,
    end: Point,
    touched: boolean[][],
    current: Point,
    path: Point[],
): boolean {
    if (current.x === end.x && current.y === end.y) {
        path.push(current);

        return true;
    }
    if (maze[current.y][current.x] === wall) {
        return false;
    }
    if (
        current.x < 0 ||
        current.x >= maze[0].length ||
        current.y < 0 ||
        current.y >= maze.length
    ) {
        return false;
    }
    if (touched[current.y][current.x]) {
        return false;
    }

    touched[current.y][current.x] = true;
    path.push(current);

    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i];
        const newCurrent = {
            x: current.x + x,
            y: current.y + y,
        };

        //In JavaScript, when you assign an object to another variable using the assignment operator (=), it creates a new reference to the same underlying object. This means that both variables point to the same object in memory.

        // THIS WRONG, newCurrent2.x is not a copy of current.x, but rather a reference to the same property on the original current object. When you update newCurrent2.x, you are actually updating the original current.x property.

        //This behavior is known as "object referencing" or "shallow copying." It's different from creating a deep copy of an object, where each property would be copied recursively
        // const newCurrent2 = current;
        // newCurrent2.x += x;
        // newCurrent2.y += y;

        if (walk(maze, wall, end, touched, newCurrent, path)) {
            return true;
        }
    }
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let y = maze.length;
    let x = maze[0].length;
    let touched = [];

    for (let i = 0; i < y; i++) {
        touched[i] = Array(x).fill(false);
    }

    let path = [] as Point[];
    walk(maze, wall, end, touched, start, path);

    return path;
}
