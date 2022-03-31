const array = [
    "Value1", "Value2", "Value3"
];

test("Const array contains value2", () => {
    expect(array).toContain("Value2");
});

test("Const array contains value3", () => {
    expect(array).toContain("Value3");
});

test("Const array no contains UNAC", () => {
    expect(array).not.toContain("UNAC");
});