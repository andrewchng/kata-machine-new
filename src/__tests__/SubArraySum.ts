import sub_array_sum from "@code/SubArraySum";

test("sub-array-sum", function () {
    const arr = [1,1,1,1,1];
    const target = 3;
    const result = sub_array_sum(arr, target);
    expect(result).toBe(3);
});

test("sub-array-sum with negative numbers", function () {
    const arr = [-1, -1, 1, 1, 1];
    const target = 0;
    const result = sub_array_sum(arr, target);
    expect(result).toBe(2);
});

test("sub-array-sum with mixed positive and negative numbers", function () {
    const arr = [1, -1, 2, 3, -2, 4];
    const target = 5;
    const result = sub_array_sum(arr, target);
    expect(result).toBe(3);
});

test("sub-array-sum with no subarray matching target", function () {
    const arr = [1, 2, 3, 4, 5];
    const target = 20;
    const result = sub_array_sum(arr, target);
    expect(result).toBe(0);
});

test("sub-array-sum with single element array", function () {
    const arr = [5];
    const target = 5;
    const result = sub_array_sum(arr, target);
    expect(result).toBe(1);
});

test("sub-array-sum with empty array", function () {
    const arr: number[] = [];
    const target = 0;
    const result = sub_array_sum(arr, target);
    expect(result).toBe(0);
});