import longest_substring from "@code/LongestSubstring";

test("longest substring - empty string", function () {
    expect(longest_substring("")).toBe(0);
});

test("longest substring - single character", function () {
    expect(longest_substring("a")).toBe(1);
});

test("longest substring - all same characters", function () {
    expect(longest_substring("bbbbb")).toBe(1);
});

test("longest substring - classic example abcabcbb", function () {
    expect(longest_substring("abcabcbb")).toBe(3);
});

test("longest substring - classic example pwwkew", function () {
    expect(longest_substring("pwwkew")).toBe(3);
});

test("longest substring - classic example dvdf", function () {
    expect(longest_substring("dvdf")).toBe(3);
});

test("longest substring - abba stale left pointer trap", function () {
    expect(longest_substring("abba")).toBe(2);
});

test("longest substring - spaces and symbols", function () {
    expect(longest_substring("a b c!a")).toBe(5);
    expect(longest_substring("  abc  ")).toBe(4);
    expect(longest_substring("!@#$%^&*()")).toBe(10);
});

test("longest substring - all unique characters", function () {
    expect(longest_substring("abcdef")).toBe(6);
    expect(longest_substring("wxyz")).toBe(4);
});
