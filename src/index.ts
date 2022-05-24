let indice: number = 0;
let vector1: number[] = [1, 3, 7, 9, 9, 5];
let vector2: number[] = [6, 9, 2, 5, 9, 4];

let vectorSuma: number[] = new Array(6);

for (vector1[indice]; indice < 6; indice++) {
  vectorSuma[indice] = vector1[indice] + vector2[indice];
  console.log(
    "La suma de los vectores de la posición ",
    indice,
    " es ",
    vectorSuma[indice]
  );
}
