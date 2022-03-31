const anything = "UNAC";

test ("UNAC contains UN", () => {
    // Probar
    expect(anything).toMatch(/UN/); 
});

test ("UNAC does not contain a P", () => {
    // Probar
    expect(anything).not.toMatch(/P/); 
});