/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type of brackets in the correct order. 
 */
export default function valid_parentheses(s: string): boolean {
    const stack: string[] = [];
    const paremMap: Record<string, string> = {
        "{": "}",
        "(": ")",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        const v = s[i];
        if (paremMap[v]) {
            stack.push(v);
            continue;
        }
        const open = stack.pop();
        if (open === undefined || paremMap[open] !== v) {
            return false;
        }
    }

    return stack.length === 0;
} 
