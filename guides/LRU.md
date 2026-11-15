# LRU

## What it asks

Build a Least Recently Used cache with a fixed capacity. `get` returns the value (and marks the key as most recently used) or `undefined`. `update` sets the value, or inserts it; if the cache is already full, evict the least recently used key first. The test constructs it as `new LRU<string, number>(3)`. The generated stub's `constructor()` takes no argument, so add a capacity parameter yourself.

```ts
export default class LRU<K, V> {
    private length: number;
    constructor(capacity: number);
    update(key: K, value: V): void;
    get(key: K): V | undefined;
}
```

## Pattern

**LRU cache (hash map + doubly linked list).** Spot it when you need O(1) get and update, and when the item that has been unused the longest should leave first.

One-line picture: a closet with a limited number of hangers. The thing you just used moves to the front. When the closet is full, the thing at the back leaves.

## How to run

```bash
npx jest LRU
```

## Hints

<details>
<summary>Nudge</summary>

A map from key to node gives O(1) lookup. A doubly linked list of those same nodes tracks recency: head is most recent, tail is least recent. `get` and `update` both move the node to the front.
</details>

<details>
<summary>Approach</summary>

On `get`, if the key is missing return `undefined`; otherwise move that node to the front and return its value. On `update`, if the key exists, change its value and move it to the front. If it is new and `length === capacity`, evict the tail: remove it from the list and from the map. Then insert the new node at the front.
</details>

<details>
<summary>Pseudocode</summary>

```
get(key):
    node = map[key]
    if node is missing: return undefined
    move node to the front of the list
    return node.value

update(key, value):
    if key is in the map:
        node.value = value
        move node to the front
        return
    if length == capacity:
        remove tail from the list and from the map
        length--
    insert a new node at the front, map[key] = node
    length++
```
</details>

## Edge cases to check

- `get` of a missing key (`"foo"` at the start) is `undefined`.
- Capacity is 3. After `foo`, `bar`, `baz`, a new key `ball` evicts `foo`.
- `get("bar")` counts as a use, so `bar` is no longer the oldest. The next insert evicts `baz`, not `bar`.
- Updating an existing key must not grow `length` or evict something else.

## Complexity

- Time: **O(1)** for `get` and `update`
- Space: **O(capacity)**

The map and the list both let you find and move a node without walking the cache.

## Common mistakes

- Not moving a key to the front on `get`, so a key you just read can still be evicted first.
- Evicting from the front instead of the tail, or evicting from the list but leaving the key in the map.
- Forgetting that `update` of an existing key is a use, not a new insert.
- The generated constructor takes no capacity. The test passes `3`; accept that argument.
- Using an array and `indexOf` / `splice`, which is not O(1).

## Related

[LeetCode 146. LRU Cache](https://leetcode.com/problems/lru-cache/)
