import valid_parentheses from "@code/ValidParentheses";

test("valid parentheses - empty string", function () {
    expect(valid_parentheses("")).toBe(true);
});

test("valid parentheses - single opening bracket", function () {
    expect(valid_parentheses("(")).toBe(false);
});

test("valid parentheses - single closing bracket", function () {
    expect(valid_parentheses(")")).toBe(false);
});

test("valid parentheses - simple pair", function () {
    expect(valid_parentheses("()")).toBe(true);
});

test("valid parentheses - multiple types", function () {
    expect(valid_parentheses("()[]{}")).toBe(true);
});

test("valid parentheses - mismatched types", function () {
    expect(valid_parentheses("(]")).toBe(false);
});

test("valid parentheses - wrong nesting order", function () {
    expect(valid_parentheses("([)]")).toBe(false);
});

test("valid parentheses - nested same type", function () {
    expect(valid_parentheses("{[]}")).toBe(true);
});

test("valid parentheses - only openers", function () {
    expect(valid_parentheses("((([{{[")).toBe(false);
});

test("valid parentheses - only closers", function () {
    expect(valid_parentheses(")))]}}}")).toBe(false);
});

test("valid parentheses - closer before opener", function () {
    expect(valid_parentheses(")(")).toBe(false);
    expect(valid_parentheses("]")).toBe(false);
    expect(valid_parentheses("}{")).toBe(false);
});

test("valid parentheses - long nested valid", function () {
    expect(valid_parentheses("([{}(([])){}])")).toBe(true);
    expect(valid_parentheses("{[()()]()}")).toBe(true);
});

test("valid parentheses - long almost valid", function () {
    expect(valid_parentheses("([{}(([])){}])(")).toBe(false);
    expect(valid_parentheses("{[()()]()}]")).toBe(false);
    expect(valid_parentheses("((()))((()))((()))")).toBe(true);
    expect(valid_parentheses("((()))((())(")).toBe(false);
});
