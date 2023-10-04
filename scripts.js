const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  let newHTML = ""

  newHTML += `
  <p>${pregunta.titulo}</p>
  `

  return newHTML
}

let respuesta = pregunta.respuestas

function imprimeTodasLasRespuestas(pregunta) {
  let newHTML = "";
  for(i=0;i<pregunta.respuestas.length;i++){
    newHTML += imprimeUnaRespuesta(respuesta[i])
  }
  return newHTML
}

function imprimeUnaRespuesta(respuesta) {
  let newHTML = ""

  newHTML += imprimeLabel(respuesta)
  newHTML += imprimeInput(respuesta) 

  return newHTML
}

function imprimeLabel(respuesta) {
  let newHTML = ""
  newHTML += `
  <label for="${respuesta.id}">${respuesta.label}</label>
  `
  return newHTML
}

function imprimeInput(respuesta) {
  let newHTML = ""
  newHTML += `
  <input id="${respuesta.id}" name="${respuesta.name}" type="radio" value="${respuesta.value}">
  `
  return newHTML
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);


imprimePregunta(pregunta)