# LongestSubstring

## What it asks

Return the length of the longest substring with no repeating characters. You do not need the substring itself.

```ts
export default function longest_substring(s: string): number
```

## Pattern

**Sliding window.** Spot it when you want the longest (or shortest) substring that satisfies a rule, and you can grow and shrink one window instead of restarting.

One-line picture: a caterpillar on a string. The right end (`right`) eats a new letter. If that letter is already in the body, the left end (`left`) takes one step at a time and drops its letter, until the repeat is gone.

## How to run

```bash
npx jest LongestSubstring
```

## Hints

<details>
<summary>Nudge</summary>

A Set holds exactly the letters in the current window. `right` walks forward and tries to add each letter. If the letter is already in the Set, `left` must clean up first.
</details>

<details>
<summary>Approach</summary>

`left` never jumps, and `right` never moves backwards. While `s[right]` is already in the Set, delete `s[left]` from the Set and move `left` forward by one. Then add `s[right]` and update `best` with the window length `right - left + 1`. Spaces and symbols count as characters too.
</details>

<details>
<summary>Pseudocode</summary>

```
seen = empty Set
left = 0
best = 0
for right from 0 to s.length - 1:
    while s[right] is in seen:
        delete s[left] from seen
        left = left + 1
    add s[right] to seen
    best = max(best, right - left + 1)
return best
```
</details>

## Edge cases to check

- `""` returns `0`; a single character returns `1`.
- All the same character (`"bbbbb"`) returns `1`.
- Classic cases: `"abcabcbb"` and `"pwwkew"` return `3`.
- `"dvdf"` returns `3` (`vdf`). If you jump `left` past the first repeat and also skip `v`, you will get this wrong.
- `"abba"` returns `2`. If you store last-seen indexes and forget to only move `left` forward, `left` can go backwards and overcount.
- Spaces and symbols: `"a b c!a"` returns `5`; `"  abc  "` returns `4`; `"!@#$%^&*()"` returns `10`.

## Complexity

- Time: **O(n)**
- Space: **O(min(n, alphabet))**

Each character is added to the Set once and removed at most once, so the two pointers never go backwards. The Set holds only the letters in the window.

## Common mistakes

- A Set holds the current window, not every substring you have ever seen.
- When a repeat appears, `left` steps forward one at a time and deletes its own letter from the Set. It does not jump straight past the repeat, and it does not clear the whole Set.
- `right` never moves backwards, and `left` never jumps past `right`.
- Forgetting to update `best` on every valid window, or returning the substring instead of its length.
- If you use a last-seen index map instead of a Set, never move `left` to the left (the `"abba"` trap).

## Related

[LeetCode 3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
