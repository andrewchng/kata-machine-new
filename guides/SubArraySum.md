# SubArraySum

## What it asks

Count how many continuous subarrays sum to `k`. The array can contain negatives, so a shrinking window is not enough.

```ts
export default function sub_array_sum(arr: number[], k: number): number
```

## Pattern

**Prefix sum + hash map.** Spot it when you need the count (or existence) of a subarray that adds to a target, especially if values can be negative.

One-line picture: keep a running total, and a notebook of totals you have already seen. If the current total minus `k` was seen before, the stretch in between adds to `k`.

## How to run

```bash
npx jest SubArraySum
```

## Hints

<details>
<summary>Nudge</summary>

If `prefix[j] - prefix[i] === k`, then the subarray from `i + 1` to `j` sums to `k`. Store how many times each prefix sum has appeared as you walk the array once.
</details>

<details>
<summary>Approach</summary>

Start a map with `0 → 1` (the empty prefix). Walk the array, adding each item to a running sum. Add `map[running - k]` (or 0 if missing) to the answer, then increment `map[running]`. This works with negatives, which is required: one test is `[-1, -1, 1, 1, 1]` with `k = 0`.
</details>

<details>
<summary>Pseudocode</summary>

```
map = { 0: 1 }
running = 0
count = 0
for x in arr:
    running = running + x
    count = count + (map[running - k] or 0)
    map[running] = (map[running] or 0) + 1
return count
```
</details>

## Edge cases to check

- `[1, 1, 1, 1, 1]`, `k = 3` returns `3`.
- Negatives: `[-1, -1, 1, 1, 1]`, `k = 0` returns `2`.
- Mixed signs: `[1, -1, 2, 3, -2, 4]`, `k = 5` returns `3`.
- No subarray matches: return `0`.
- A one-item array that equals `k` returns `1`.
- An empty array returns `0`.

## Complexity

- Time: **O(n)**
- Space: **O(n)**

You walk the array once, and the map holds at most one new prefix sum per item.

## Common mistakes

- Using a sliding window that shrinks from the left. That only works when every number is positive, and the tests include negatives.
- Forgetting to seed the map with `0 → 1`, which misses subarrays that start at index 0.
- Updating the map before you add `map[running - k]`, which can count a subarray of length 0 when `k === 0`.
- Returning whether a subarray exists, instead of the count.

## Related

[LeetCode 560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
