/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order.
 */
export default function valid_parentheses(s: string): boolean {
    const stack: string[] = [];
    const parentMap: Record<string, string> = {
        "{": "}",
        "(": ")",
        "[": "]",
    };

    for (let ch of s) {
        if (parentMap[ch]) {
            stack.push(ch);
            continue;
        }

        const open = stack.pop();
        if (open === undefined || parentMap[open] !== ch) {
            return false;
        }
    }
    return stack.length === 0;
}
