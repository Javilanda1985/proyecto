import { sum } from "../src/sum";

test ("Funcion Suma de 2+2 igual a 4", () => {
    // Probar
    expect(sum(2,2)).toBe(4); 
});

test ("Funcion Suma de 5+5 igual a 10", () => {
    // Probar
    expect(sum(5,5)).toBe(10); 
});