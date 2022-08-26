const btnS = document.querySelector("#button");

btnS.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnS.classList.toggle("active");
});

function llamarmenu() {
  let nroejer = parseInt(
    prompt(
      "ingrese el numero de ejercicio que desea ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 9. Saber la edad del empleado \r\n 10. Calcular la persona con menor edad \r\n 11. Calcular el bono por antigüedad \r\n 12. Calcular el incremento de salario \r\n 13. Saber la cantidad de aprobados y desaprobados \r\n 14. Calcular la cantidad de focos \r\n 15. Saber si puede votar"
    )
  );

  if (isNaN(nroejer)) {
    alert("ingresa un valor numerico no te creas habil");
  } else {
    menuejercicios(nroejer);
  }
}

const menuejercicios = (nroejer) => {
  switch (nroejer) {
    case 1:
      var n1 = parseInt(prompt("ingrese el primer numero"));
      var n2 = parseInt(prompt("ingrese el 2do numero "));
      alert(ej1_suma(n1, n2));
      break;
    case 2:
      let prom1 = parseFloat(prompt("ingrese el primero numero"));
      let prom2 = parseFloat(prompt("ingrese el segundo numero"));
      let prom3 = parseFloat(prompt("ingrese el tercero numero"));
      let prom4 = parseFloat(prompt("ingrese el cuarto numero"));
      alert(ej2_prom(prom1, prom2, prom3, prom4));
      break;
    case 3:
      let basec = parseInt(prompt("ingrese la base "));
      let alturac = parseInt(prompt("ingrese la altura"));
      alert(ej3_areacuadrado(basec, alturac));
      break;
    case 4:
      let baset = parseInt(prompt("ingrese la base "));
      let alturat = parseInt(prompt("ingrese la altura"));
      alert(ej4_areatriangulo(baset, alturat));
      break;
    case 5:
      let radioc = parseInt(prompt("ingrese radio"));
      alert(ej5_arecirc(radioc));
      break;
    case 6:
      let salariohr = parseInt(prompt("ingrese salario  "));
      let horashr = parseInt(prompt("ingrese numero de horas"));
      alert(ej6_salario(salariohr, horashr));
      break;
    case 7:
      let pulgadas = parseFloat(prompt("ingrese la cantidad en metros"));
      alert(ej7_pulgas(pulgadas));

      break;
    case 8:
      let dolares = parseFloat(prompt("ingrese la cantidad en dolares"));
      alert(ej8_dolares(dolares));
      break;
    case 9:
      let edad = parseInt(prompt("ingrese la edad"));
      alert(ej9_edad(edad));
      break;
    case 10:
      let nombre1 = prompt("ingrese el nombre");
      let edad1 = parseInt(prompt("ingrese la edad"));
      let nombre2 = prompt("ingrese el nombre");
      let edad2 = parseInt(prompt("ingrese la edad"));
      let nombre3 = prompt("ingrese el nombre");
      let edad3 = parseInt(prompt("ingrese la edad"));

      alert(ej10_menor(edad1, edad2, edad3, nombre1, nombre2, nombre3));
      break;
    case 11:
      let antigüedad = parseInt(prompt("ingresa la antiguedad"));
      alert(ej11_antiguedad(antigüedad));
      break;
    case 12:
      let salario = parseInt(prompt("ingresa el salario"));
      alert(ej12_incremento(salario));
      break;
    case 13:
      let cantidadAlumnos = parseInt(prompt("ingresa la nota"));
    
      alert(ej13_aprobado(cantidadAlumnos));
      break;
    case 14:
      let focos = parseInt(prompt("ingresa la cantidad de focos"));
      alert(ej14_focos(focos));
      break;
    case 15:
      let añoNacimiento = parseInt(prompt("ingresa la edad"));
      alert(ej15_votar(añoNacimiento));
      break;

    default:
      alert("seleccion no encontrada");
      break;
  }
};

function ej1_suma(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    return "porfavor ingresa valores numericos";
  } else {
    return "la suma es : " + (n1 + n2);
  }
}

function ej2_prom(prom1, prom2, prom3, prom4) {
  if (isNaN(prom1 || isNaN(prom2) || isNaN(pro)))
    return "Ingrese valores numericos";
  else 
  return "El promedio es: " + (prom1 + prom2 + prom3 + prom4) / 4;
}

function ej3_areacuadrado(base, altura) {
  if (isNaN(base) || isNaN(altura))
   return "Ingrese valores numericos";
  else 
  return "El area del cuadrado es: " + base * altura;
}
function ej4_areatriangulo(baset, alturat) 


{
  if (isNaN(baset) || isNaN(alturat)) 
  return "Ingrese valores numericos";
  else 
  return "El area del triangulo es: " + (baset * alturat) / 2;
}

function ej5_arecirc(radioc) {
  if (isNaN(radioc)) 
  return "ingrese valor de radio";
  else 
  return " el area del circulo es : " + 3.1416 * (radioc * radioc);
}

function ej6_salario(salariohr, horashr) {
  if (isNaN(salariohr) || isNaN(horashr)) 
  return "ingrese valores numericos";
  else 
  return "el salario es: " + salariohr * horashr;
}
function ej7_pulgas(pulgadas) {
  if (isNaN(pulgadas)) 
  return "ingrese valores numericos";
  else
   return "el area en metros es: " + pulgadas * 0.0254;
}

function ej8_dolares(dolares) {
  if (isNaN(dolares)) 
  return "ingrese la cantidad de dolares a cambiar";
  else 
  return "el tipo de cambio en dolares es : " + dolares * 3.8;
}
function ej9_edad(edad) {
  if (isNaN(edad)) 
  return "ingrese el año de nacimiento";
  else 
  return "  la edad de usted es " + (2022 - edad);
}

function ej10_menor(nombre1, nombre2, nombre3, edad1, edad2, edad3) {
  let mayor = edad1;
  if (edad2 > mayor) {
    mayor = edad2;
    if (edad3 > mayor) {
      mayor = edad3;
      return "El mayor es " + nombre3 + " su edad es " + String(mayor);
    } else {
      return "El mayor es " + nombre2 + " su edad es " + String(mayor);
    }
  } else {
    if (edad3 > mayor) {
      mayor = edad3;
      return "El mayor es " + nombre3 + " su edad es " + String(mayor);
    } else {
      return "El mayor es " + nombre1 + " su edad es " + String(mayor);
    }
  }
}

function ej11_antiguedad(antiguedad) {
  if (!isNaN(antiguedad) && antiguedad > 1900) {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    let cantidadAños = añoActual - antiguedad;
    let bono = 100;
    if (cantidadAños > 0 && cantidadAños < 6) {
      return "El bono que recibirá es: $" + String(bono * cantidadAños);
    } else {
      return "El bono que recibirá es: $1000 ";
    }
  } else {
    return "ingrese un valor numérico de cuatro cifras";
  }
}

function ej12_incremento() {
  let salario = 1500;
  let año = 0;
  while (año < 6) {
    año = año + 1;
    salario = salario * 1.1;
    salario = salario.toFixed(2);
    alert("El salario para elaño " + año + " es de " + salario);
  }
}

function ej13_aprobado(cantidadAlumnos) {
  let aprobados = 0;
  let desaprobados = 0;
  for (let i = 0; i < cantidadAlumnos; i++) {
    let nota = parseInt(prompt("ingrese la nota del alumno"));
    if (nota > 10) {
      aprobados = aprobados + 1;
    } else {
      desaprobados = desaprobados + 1;
    }

function ej14_focos(focos) {
  let n = 0;
  let verde = 0;
  let blanco = 0;
  let rojo = 0;

  while (n < focos) {
    let enter = parseInt(
      prompt("Ingrese el color del foco: \n 1. Verde \n 2. Blanco \n 3. Rojo")
    );
    n = n + 1;
    if (enter == 1) {
      verde++;
    } else if (enter == 2) {
      blanco++;
    } else {
      rojo++;
    }
  }
  return `La cantidad total de focos es: ${focos} de los cuales ${verde} son verdes, ${blanco} son blancos y ${rojo} son rojos`;
}

function ej15_votar(añoNacimiento) {
  if (!isNaN(añoNacimiento) && añoNacimiento > 1900) {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    let cantidadAños = añoActual - añoNacimiento;
    if (cantidadAños > 0 && cantidadAños < 19) {
      return "Usted no es mayor de edad puede sufragar";
    } else {
      if (cantidadAños <= 0) {
        return "No ingreso un dato correcto";
      } else {
        return "Usted es mayor de edad puede sufragar";
      }
    }
  } else {
    return "ingrese un valor numérico de cuatro cifras";
  }
}}}
