import { div } from "../src/div";

test ("Funcion Dividir 10/2 igual a 5", () => {
    // Probar
    expect(div(10,2)).toBe(5); 
});

test ("Funcion Dividir 5/2 igual a 2", () => {
    // Probar
    expect(div(5,0)).toBe(Infinity); 
});