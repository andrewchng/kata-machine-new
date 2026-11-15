# Trie

## What it asks

Build a prefix tree of words. `insert` adds a word, `delete` removes one, and `find(partial)` returns every inserted word that starts with that prefix.

```ts
export default class Trie {
    constructor();
    insert(item: string): void;
    delete(item: string): void;
    find(partial: string): string[];
}
```

## Pattern

**Trie (prefix tree).** Spot it when you need autocomplete, or many checks that share a prefix.

One-line picture: a tree of letters. The path from the root spells a word, and words that share a prefix share a path.

## How to run

```bash
npx jest Trie
```

## Hints

<details>
<summary>Nudge</summary>

Each node has a map (or array) of child letters, and a flag for "a word ends here". `insert` walks or creates one node per character, then marks the end. `find` walks the prefix, then collects every word below that node.
</details>

<details>
<summary>Approach</summary>

For `find`, after you reach the prefix node, depth-first walk the subtree and build the suffix. Include the prefix itself if its end flag is set. For `delete`, walk the word, then unmark the end (or remove nodes that have no children and are not the end of another word) so shared prefixes like `foo` survive when you delete `fool`.
</details>

<details>
<summary>Pseudocode</summary>

```
insert(word):
    node = root
    for each letter in word:
        create node.children[letter] if missing
        node = node.children[letter]
    node.is_word = true

find(partial):
    node = walk from root along partial; return [] if the walk fails
    results = []
    collect(node, partial, results)
    return results

collect(node, prefix, results):
    if node.is_word: results.push(prefix)
    for letter, child in node.children:
        collect(child, prefix + letter, results)

delete(word):
    walk the word; if it is not present, do nothing
    clear is_word
    optionally prune nodes that have no children and are not words
```
</details>

## Edge cases to check

- After inserting `foo`, `fool`, `foolish`, and `bar`, `find("fo")` is `foo`, `fool`, `foolish` (order does not matter; the test sorts).
- After `delete("fool")`, `find("fo")` still has `foo` and `foolish`.
- `find` of a prefix that matches nothing should return `[]`.
- Deleting a word that is a prefix of another word must not remove the longer word.

## Complexity

- Time: **O(k)** for `insert` and `delete`, **O(k + m)** for `find`, where k is the word or prefix length and m is the size of the subtree you collect
- Space: **O(total characters stored)**, with sharing for common prefixes

You do one step per character, and `find` then visits each leftover character of the matches.

## Common mistakes

- Forgetting the "word ends here" flag, so `foo` cannot be distinguished from the path to `fool`.
- `delete("fool")` accidentally removing nodes that `foo` or `foolish` still need.
- `find` returning only the first match, or not including the prefix when the prefix itself is a word.
- Not walking letter by letter (storing whole words in a list would pass small tests but is not a trie).

## Related

[LeetCode 208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) and [LeetCode 1268. Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/).
