# Map

## What it asks

Build a hash map from a `string | number` key to a value. Support `get`, `set`, `delete`, and `size`. The point is to implement hashing yourself, not to wrap the built-in `Map`.

```ts
export default class Map<T extends (string | number), V> {
    constructor();
    get(key: T): V | undefined;
    set(key: T, value: V): void;
    delete(key: T): V | undefined;
    size(): number;
}
```

The class name `Map` shadows TypeScript's built-in `Map`. That is how the stub is generated.

## Pattern

**Hash map.** Spot it when you need average O(1) lookup, insert, and delete by key.

One-line picture: a wall of numbered mailboxes. You hash the key to pick a box, then store the key and value in that box (with a list if two keys land in the same box).

## How to run

```bash
npx jest Map
```

## Hints

<details>
<summary>Nudge</summary>

Use an array of buckets. `hash(key) % bucketCount` picks the bucket. Each bucket holds a list of `{ key, value }` pairs, so collisions are fine.
</details>

<details>
<summary>Approach</summary>

`set` overwrites the value if the key is already in that bucket, otherwise it appends a new pair and increments size. `get` walks the bucket and returns `undefined` if the key is missing. `delete` removes the pair if it exists, decrements size, and returns the old value (or `undefined`). You can grow and rehash if a bucket gets long, but the tests are small.
</details>

<details>
<summary>Pseudocode</summary>

```
index(key) = hash(key) % buckets.length

set(key, value):
    bucket = buckets[index(key)]
    if key is already in bucket: update its value and return
    bucket.push({ key, value })
    count++

get(key):
    look in buckets[index(key)] for key; return its value or undefined

delete(key):
    if key is not in the bucket: return undefined
    remove the pair, count--, return the old value

size():
    return count
```
</details>

## Edge cases to check

- `set` of a new key increases size; `set` of an existing key (`"foo"` twice, if you try it) should not.
- `get` of a missing key returns `undefined`.
- `delete` of a missing key (`"barblabr"` in the test) leaves size unchanged.
- After `delete("bar")`, size drops and `get("bar")` is `undefined`.

## Complexity

- Time: **O(1)** average for `get`, `set`, and `delete`; **O(n)** worst case if every key lands in one bucket
- Space: **O(n)**

A good hash spreads keys across buckets, so each bucket stays short.

## Common mistakes

- Using the built-in `Map` or a plain object as the whole solution. You are meant to hash into buckets.
- Not handling collisions, so a second key in the same bucket overwrites the first.
- Forgetting to change `size` on a new `set`, or changing it when `set` only updates, or when `delete` misses.
- `delete` not returning the old value.
