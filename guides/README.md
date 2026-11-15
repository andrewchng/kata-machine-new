# Practice guides

Short, scannable hints for every kata in this repo. Use them when you sit down to practice, not as a stand-in for trying the problem cold.

## The practice loop

1. **Generate a new day.** This creates `src/dayN` with a stub for each kata in `ligma.config.js`, and points Jest at that folder:

   ```bash
   yarn generate
   ```

   Check which day is current with `yarn day`.

2. **Pick a kata** from the table below and open its guide.

3. **Try it cold** in `src/dayN/<KataName>.ts`. Do not peek at older `src/day*` folders or past solutions.

4. **Run that kata's test:**

   ```bash
   npx jest KataName
   ```

   `yarn test` runs every kata currently listed in `ligma.config.js` against the latest day, so many will fail if you have not solved them yet. Prefer `npx jest KataName` during a session.

5. **If you get stuck**, open the guide and use the hints one level at a time: Nudge, then Approach, then Pseudocode. These guides do not contain full TypeScript solutions.

## How the repo is wired

- `ligma.config.js` is the list of katas `yarn generate` stubs out.
- `scripts/dsa.js` is the catalog of function and class signatures.
- Tests live in `src/__tests__` and import your code as `@code/KataName`.
- After you generate, Jest and `tsconfig.json` map `@code/*` to the latest `src/dayN` folder.

Do not run `yarn clear` unless you mean it: it deletes every `src/day*` folder.

## Katas in the current generate list

These are the names in `ligma.config.js` (duplicates removed) and in the `yarn test` script.

| Kata | Pattern | Difficulty | Guide |
|------|---------|------------|-------|
| LinearSearchList | Linear scan | Easy | [guide](LinearSearchList.md) |
| BinarySearchList | Binary search | Easy | [guide](BinarySearchList.md) |
| TwoCrystalBalls | Jump search | Medium | [guide](TwoCrystalBalls.md) |
| BubbleSort | Sorting | Easy | [guide](BubbleSort.md) |
| QuickSort | Divide and conquer | Medium | [guide](QuickSort.md) |
| SinglyLinkedList | Linked list | Medium | [guide](SinglyLinkedList.md) |
| DoublyLinkedList | Linked list | Medium | [guide](DoublyLinkedList.md) |
| ArrayList | Dynamic array | Medium | [guide](ArrayList.md) |
| Queue | Queue (FIFO) | Easy | [guide](Queue.md) |
| Stack | Stack (LIFO) | Easy | [guide](Stack.md) |
| MazeSolver | Graph DFS / backtracking | Medium | [guide](MazeSolver.md) |
| BTPreOrder | Tree DFS | Easy | [guide](BTPreOrder.md) |
| BTInOrder | Tree DFS | Easy | [guide](BTInOrder.md) |
| BTPostOrder | Tree DFS | Easy | [guide](BTPostOrder.md) |
| BTBFS | Tree BFS | Easy | [guide](BTBFS.md) |
| CompareBinaryTrees | Tree DFS | Easy | [guide](CompareBinaryTrees.md) |
| DFSOnBST | BST search | Easy | [guide](DFSOnBST.md) |
| DFSGraphList | Graph DFS | Medium | [guide](DFSGraphList.md) |
| BFSGraphMatrix | Graph BFS | Medium | [guide](BFSGraphMatrix.md) |
| Trie | Prefix tree | Medium | [guide](Trie.md) |
| Map | Hash map | Medium | [guide](Map.md) |
| MinHeap | Heap | Medium | [guide](MinHeap.md) |
| DijkstraList | Shortest path | Hard | [guide](DijkstraList.md) |
| LRU | LRU cache | Hard | [guide](LRU.md) |
| SubArraySum | Prefix sum + map | Medium | [guide](SubArraySum.md) |
| ValidParentheses | Stack | Easy | [guide](ValidParentheses.md) |
| LongestSubstring | Sliding window | Medium | [guide](LongestSubstring.md) |

## Extra katas

These have tests in `src/__tests__`, and most have a signature in `scripts/dsa.js`, but they are not in `ligma.config.js` right now. `yarn generate` will not create a stub until you add the name to that list.

`Recursive` is test-only: it is not in `dsa.js`, so generate will not stub it even if you add the name. Copy a blank `sum` function yourself if you want to retry it.

| Kata | Pattern | Difficulty | Guide |
|------|---------|------------|-------|
| InsertionSort | Sorting | Easy | [guide](InsertionSort.md) |
| MergeSort | Divide and conquer | Medium | [guide](MergeSort.md) |
| BFSGraphList | Graph BFS | Medium | [guide](BFSGraphList.md) |
| PrimsList | Minimum spanning tree | Hard | [guide](PrimsList.md) |
| RingBuffer | Circular buffer | Medium | [guide](RingBuffer.md) |
| Recursive | Recursion | Easy | [guide](Recursive.md) |
