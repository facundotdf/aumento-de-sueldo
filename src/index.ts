let sueldo: number | any = Number(prompt("ingrese numero"));
let aumento1: number = (sueldo * 20) / 100;
let aumento2: number = (sueldo * 10) / 100;
let aumento3: number = (sueldo * 5) / 100;

let sueldoAumentado1 = sueldo + aumento1;
let sueldoAumentado2 = sueldo + aumento2;
let sueldoAumentado3 = sueldo + aumento3;

if (sueldo >= 1 && sueldo <= 15000) {
  console.log(
    " Su salario es:" + sueldo ,
    "Aumento del 20%:" + aumento1 ,
    "Sueldo total:" + sueldoAumentado1,
  );
} else (sueldo >= 15000 && sueldo <= 20000) {
  console.log(
    " Su salario es:" + sueldo,
    "Aumento del 10%:" + aumento2,
    "Sueldo total:" + sueldoAumentado2,
  );
} else if (sueldo >= 20001 && sueldo <= 25000) {
  console.log(
    " Su salario es:" + sueldo,
    "Aumento del 5%:" + aumento3,,
    "Sueldo total:" + sueldoAumentado3,
  );
} else {
  console.log("no tiene aumento");
}