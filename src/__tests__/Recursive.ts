import sum from "@code/Recursive";

test("recursive sum", function () {
    expect(sum(4)).toEqual(10);
    expect(sum(5)).toEqual(15);
    expect(sum(6)).toEqual(21);
});
