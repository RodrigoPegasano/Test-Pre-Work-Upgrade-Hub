// Empezando primer test con GitHub

// Voy a agregar el ejercico de la piramide que hemos hecho en el prework para que se me actualice el repositorio
// Variable de la piramide
let piramide = "";

// Bucle para recorrer del número 1 al 9
for (let i = 1; i <= 9; i++) {
  // Bucle de repetición
  for (let j = 0; j < i; j++) {
    piramide = piramide + i;
  }
  piramide += '\n';
}

// Imprime toda la piramide
console.log(piramide);