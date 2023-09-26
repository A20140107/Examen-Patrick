var nombre = prompt("Escriba su nombre usuario.\nEscribe tu nombre:")
var correct = 0
var incorrect = 0
alert(nombre+",Bienvenido al cuestionario!!!")
var res1 = prompt("¿Cuánta agua hay en la Tierra? \nA. Alrededor de un 41% de la superficie terrestre es agua. \nB. Alrededor de un 51% de la superficie terrestre es agua \nC. Alrededor de un 71% de la superficie terrestre es agua ")
if(res1 == "C"){
    correct = correct + 1;
}else if(res1 == "A"){
    incorrect = incorrect + 1;
}else if(res1 == "B"){
    incorrect = incorrect + 1;
}else{
    alert(nombre+",esa no es una opción valida")
}

var res2 = prompt("¿Qué océano es el más grande? \nA. El Pacífico \nB.El Atlántico \nC. El Índico")
if(res2 == "A"){
    correct = correct + 1;
}else if(res2 == "B"){
    incorrect = incorrect + 1;
}else if(res2 == "C"){
    incorrect = incorrect + 1;
}else{
    alert(nombre+",esa no es una opción valida")
}

var res3 = prompt("¿Cuánto mide la parte más profunda de los Océanos? \nA. 11 Km \nB. 23 Km \nC. 31 Km")
if(res3 == "A"){
    correct = correct + 1;
}else if(res3 == "B"){
    incorrect = incorrect + 1;
}else if(res3 == "C"){
    incorrect = incorrect + 1;
}else{
    alert(nombre+",esa no es una opción valida")
}

document.write(nombre+"lo hiciste bien, hayas sacado buena o mala nota, seguiras mejorandom, siempre estudia y practica más")

