export default function sum(n: number): number {
    if (n == 0) {
        return n;
    }

    return n + sum(n - 1);
}
