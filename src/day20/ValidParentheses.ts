/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order.
 */
export default function valid_parentheses(s: string): boolean {
    const map: Record<string, string> = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const myStack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) {
            myStack.push(char);
            continue;
        }
        const popped = myStack.pop();
        if (popped === undefined || map[popped] !== char) {
            return false;
        }
    }
    return myStack.length === 0;
}
