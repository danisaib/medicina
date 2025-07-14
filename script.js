// Datos de los ramos, con su año y dependencias
const ramos = [
  // 1° Año
  { nombre: "Articulación básico clínico comunitaria I", abre: ["Articulación básico clínico comunitaria II"], ano: "1" },
  { nombre: "Bases biológicas de la práctica médica I", abre: ["Bases biológicas de la práctica médica II"], ano: "1" },
  { nombre: "Historia y salud en Argentina y Latinoamérica", abre: ["Comunicación en el campo de la salud", "Evaluación Integradora I"], ano: "1" },
  { nombre: "Salud ambiental", abre: ["Alteridad y salud"], ano: "1" },
  { nombre: "Fundamentos de la salud comunitaria", abre: ["Sujetos, instituciones y sociedad en el campo de la salud"], ano: "1" },
  { nombre: "Evaluación Integradora I", abre: ["Evaluación Integradora II"], ano: "1" },
  { nombre: "Bases biológicas de la práctica médica II", abre: ["Bases biológicas de la práctica médica III"], ano: "1" },
  { nombre: "Articulación básico clínico comunitaria II", abre: ["Articulación básico clínico comunitaria III"], ano: "1" },
  { nombre: "Sujetos, instituciones y sociedad en el campo de la salud", abre: ["Salud sexual"], ano: "1" },
  { nombre: "Alteridad y salud", abre: ["Discapacidad y rehabilitación basada en la comunidad"], ano: "1" },
  { nombre: "Comunicación en el campo de la salud", abre: ["Producción y análisis crítico del conocimiento en la salud"], ano: "1" },
  { nombre: "Evaluación Integradora II", abre: ["Evaluación Integradora III"], ano: "1" },

  // 2° Año
  { nombre: "Bases biológicas de la práctica médica III", abre: ["Bases biológicas de la práctica médica IV"], ano: "2" },
  { nombre: "Articulación básico clínico comunitaria III", abre: ["Articulación básico clínico comunitaria IV"], ano: "2" },
  { nombre: "Salud sexual", abre: ["Salud reproductiva"], ano: "2" },
  { nombre: "Salud reproductiva", abre: ["Salud integral de la mujer"], ano: "2" },
  { nombre: "Producción y análisis crítico del conocimiento en la salud", abre: ["Epidemiología", "Redes y sistemas de salud"], ano: "2" },
  { nombre: "Discapacidad y rehabilitación basada en la comunidad", abre: ["Tamizaje y ciencias del diagnóstico"], ano: "2" },
  { nombre: "Evaluación Integradora III", abre: ["Evaluación Integradora IV"], ano: "2" },

  // 3° Año
  { nombre: "Bases biológicas de la práctica médica IV", abre: ["Salud mental"], ano: "3" },
  { nombre: "Articulación básico clínico comunitaria IV", abre: ["Salud del/a trabajador/a, recreación y tiempo libre"], ano: "3" },
  { nombre: "Epidemiología", abre: ["Medicina interna y campos clínicos I"], ano: "3" },
  { nombre: "Salud integral de la mujer", abre: ["Salud colectiva y comunitaria"], ano: "3" },
  { nombre: "Redes y sistemas de salud", abre: ["Terapéuticas y farmacología"], ano: "3" },
  { nombre: "Tamizaje y ciencias del diagnóstico", abre: ["Salud del niño, niña y adolescencia"], ano: "3" },
  { nombre: "Evaluación Integradora IV", abre: ["Evaluación Integradora V"], ano: "3" },

  // 4° Año
  { nombre: "Medicina interna y campos clínicos I", abre: ["Medicina interna y campos clínicos II", "Clínica quirúrgica y emergentología"], ano: "4" },
  { nombre: "Salud colectiva y comunitaria", abre: ["Programas de salud"], ano: "4" },
  { nombre: "Terapéuticas y farmacología", abre: ["Salud de las personas mayores"], ano: "4" },
  { nombre: "Salud del niño, niña y adolescencia", abre: ["Medicina general"], ano: "4" },
  { nombre: "Salud del/a trabajador/a, recreación y tiempo libre", abre: ["Clínica quirúrgica y emergentología"], ano: "4" },
  { nombre: "Salud mental", abre: ["Medicina legal y toxicología"], ano: "4" },
  { nombre: "Evaluación Integradora V", abre: ["Evaluación Integradora VI"], ano: "4" },

  // 5° Año
  { nombre: "Medicina interna y campos clínicos II", abre: ["Economía política de la salud"], ano: "5" },
  { nombre: "Medicina general", abre: ["Cuidado paliativos y manejo del dolor"], ano: "5" },
  { nombre: "Programas de salud", abre: ["Gestión y acción en emergencias y desastres"], ano: "5" },
  { nombre: "Salud de las personas mayores", ano: "5" },
  { nombre: "Clínica quirúrgica y emergentología", ano: "5" },
  { nombre: "Bioética y derechos humanos", abre: ["Salud internacional"], ano: "5" },
  { nombre: "Medicina legal y toxicología", abre: ["Práctica Final Obligatoria"], ano: "5" },
  { nombre: "Evaluación Integradora VI", ano: "5" },

  // 6° Año
  { nombre: "Práctica Final Obligatoria", ano: "6" },

  // Optativas
  { nombre: "Salud internacional", ano: "optativas" },
  { nombre: "Economía política de la salud", ano: "optativas" },
  { nombre: "Cuidado paliativos y manejo del dolor", ano: "optativas" },
  { nombre: "Gestión y acción en emergencias y desastres", ano: "optativas" },

  // Habilidades generales
  { nombre: "Taller de informática aplicada a la salud", ano: "habilidades" },
  { nombre: "Taller de ingles técnico I", ano: "habilidades" },
  { nombre: "Taller de ingles técnico II", ano: "habilidades" }
];

// Dibujar los ramos
ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = ramo.nombre;
  div.onclick = () => aprobarRamo(ramo.nombre);
  document.getElementById(`ano-${ramo.ano}`)?.appendChild(div) ||
    document.getElementById(ramo.ano)?.appendChild(div);
  ramo.elemento = div;
});

// Desbloquear primeros del 1° año
ramos.filter(r => r.ano === "1" && !["Bases biológicas de la práctica médica II","Articulación básico clínico comunitaria II","Sujetos, instituciones y sociedad en el campo de la salud","Alteridad y salud","Comunicación en el campo de la salud","Evaluación Integradora II"].includes(r.nombre)).forEach(r => r.elemento.classList.remove("bloqueado"));

function aprobarRamo(nombre) {
  const ramo = ramos.find(r => r.nombre === nombre);
  if (!ramo || ramo.elemento.classList.contains("aprobado")) return;

  ramo.elemento.classList.add("aprobado");

  if (ramo.abre) {
    ramo.abre.forEach(dep => {
      const desbloqueo = ramos.find(r => r.nombre === dep);
      if (desbloqueo) desbloqueo.elemento.classList.remove("bloqueado");
    });
  }
}
