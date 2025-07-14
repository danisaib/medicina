const ramos = [
  { nombre: "Articulación básico clínico comunitaria I", abre: ["Articulación básico clínico comunitaria II"] },
  { nombre: "Bases biológicas de la práctica médica I", abre: ["Bases biológicas de la práctica médica II"] },
  { nombre: "Historia y salud en Argentina y Latinoamérica", abre: ["Comunicación en el campo de la salud", "Evaluación Integradora I"] },
  { nombre: "Salud ambiental", abre: ["Alteridad y salud"] },
  { nombre: "Fundamentos de la salud comunitaria", abre: ["Sujetos, instituciones y sociedad en el campo de la salud"] },
  { nombre: "Evaluación Integradora I", abre: ["Evaluación Integradora II"] },
  { nombre: "Bases biológicas de la práctica médica II", abre: ["Bases biológicas de la práctica médica III"] },
  { nombre: "Articulación básico clínico comunitaria II", abre: ["Articulación básico clínico comunitaria III"] },
  { nombre: "Sujetos, instituciones y sociedad en el campo de la salud", abre: ["Salud sexual"] },
  { nombre: "Alteridad y salud", abre: ["Discapacidad y rehabilitación basada en la comunidad"] },
  { nombre: "Comunicación en el campo de la salud", abre: ["Producción y análisis crítico del conocimiento en la salud"] },
  { nombre: "Evaluación Integradora II", abre: ["Evaluación Integradora III"] },
  { nombre: "Bases biológicas de la práctica médica III", abre: ["Bases biológicas de la práctica médica IV"] },
  { nombre: "Articulación básico clínico comunitaria III", abre: ["Articulación básico clínico comunitaria IV"] },
  { nombre: "Salud sexual", abre: ["Salud reproductiva"] },
  { nombre: "Salud reproductiva", abre: ["Salud integral de la mujer"] },
  { nombre: "Producción y análisis crítico del conocimiento en la salud", abre: ["Epidemiología", "Redes y sistemas de salud"] },
  { nombre: "Discapacidad y rehabilitación basada en la comunidad", abre: ["Tamizaje y ciencias del diagnóstico"] },
  { nombre: "Evaluación Integradora III", abre: ["Evaluación Integradora IV"] },
  { nombre: "Bases biológicas de la práctica médica IV", abre: ["Salud mental"] },
  { nombre: "Articulación básico clínico comunitaria IV", abre: ["Salud del/a trabajador/a, recreación y tiempo libre"] },
  { nombre: "Epidemiología", abre: ["Medicina interna y campos clínicos I"] },
  { nombre: "Salud integral de la mujer", abre: ["Salud colectiva y comunitaria"] },
  { nombre: "Redes y sistemas de salud", abre: ["Terapéuticas y farmacología"] },
  { nombre: "Tamizaje y ciencias del diagnóstico", abre: ["Salud del niño, niña y adolescencia"] },
  { nombre: "Evaluación Integradora IV", abre: ["Evaluación Integradora V"] },
  { nombre: "Medicina interna y campos clínicos I", abre: ["Medicina interna y campos clínicos II", "Clínica quirúrgica y emergentología"] },
  { nombre: "Salud colectiva y comunitaria", abre: ["Programas de salud"] },
  { nombre: "Terapéuticas y farmacología", abre: ["Salud de las personas mayores"] },
  { nombre: "Salud del niño, niña y adolescencia", abre: ["Medicina general"] },
  { nombre: "Salud del/a trabajador/a, recreación y tiempo libre", abre: ["Clínica quirúrgica y emergentología"] },
  { nombre: "Salud mental", abre: ["Medicina legal y toxicología"] },
  { nombre: "Evaluación Integradora V", abre: ["Evaluación Integradora VI"] },
  { nombre: "Medicina interna y campos clínicos II", abre: ["Economía política de la salud"] },
  { nombre: "Medicina general", abre: ["Cuidado paliativos y manejo del dolor"] },
  { nombre: "Programas de salud", abre: ["Gestión y acción en emergencias y desastres"] },
  { nombre: "Bioética y derechos humanos", abre: ["Salud internacional"] },
  { nombre: "Medicina legal y toxicología", abre: ["Práctica Final Obligatoria"] },
  { nombre: "Práctica Final Obligatoria" },
  { nombre: "Salud internacional" },
  { nombre: "Economía política de la salud" },
  { nombre: "Cuidado paliativos y manejo del dolor" },
  { nombre: "Gestión y acción en emergencias y desastres" },
  { nombre: "Salud de las personas mayores" },
  { nombre: "Clínica quirúrgica y emergentología" },
  { nombre: "Taller de informática aplicada a la salud" },
  { nombre: "Taller de ingles técnico I" },
  { nombre: "Taller de ingles técnico II" }
];

const mallaDiv = document.getElementById("malla");

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = ramo.nombre;
  div.onclick = () => aprobarRamo(ramo.nombre);
  mallaDiv.appendChild(div);
  ramo.elemento = div;
});

// desbloquear los iniciales (sin requisitos)
ramos.slice(0, 6).forEach(r => r.elemento.classList.remove("bloqueado"));

function aprobarRamo(nombre) {
  const ramo = ramos.find(r => r.nombre === nombre);
  if (!ramo || ramo.elemento.classList.contains("aprobado")) return;

  ramo.elemento.classList.add("aprobado");

  if (ramo.abre) {
    ramo.abre.forEach(nombreDestino => {
      const destino = ramos.find(r => r.nombre === nombreDestino);
      if (destino) destino.elemento.classList.remove("bloqueado");
    });
  }
}
