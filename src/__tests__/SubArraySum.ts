import sub_array_sum from "@code/SubArraySum";

test("sub-array-sum", function () {
    const arr = [1,1,1,1,1];
    const target = 3;
    const result = sub_array_sum(arr, target);
    expect(result).toBe(3);
});