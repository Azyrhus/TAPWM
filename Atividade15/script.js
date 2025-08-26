function createCounter(initialValue) {
  let count = initialValue;
  return () => count++;
}
const cursoContadores = {};
const cursos = {
  ADS: {
    nome: "Análise e Desenvolvimento de Sistemas",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (varia por campus)",
    titulacao: "Tecnólogo",
    descricao:
      "Formação para projetar, desenvolver, testar e manter sistemas e aplicações web/mobile, banco de dados e APIs."
  },
  SIP: {
    nome: "Sistemas para Internet",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Tarde / Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Foco em desenvolvimento web full stack, experiência do usuário, acessibilidade, servidores e computação em nuvem."
  },
  EA: {
    nome: "Eletrônica Automotiva",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Sistemas embarcados, diagnósticos, sensores, atuadores, telemetria e eletrificação veicular."
  },
  GE: {
    nome: "Gestão Empresarial",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (há ofertas EAD em alguns campi)",
    titulacao: "Tecnólogo",
    descricao:
      "Administração, finanças, marketing, pessoas e processos com foco em eficiência e tomada de decisão."
  },
  LOG: {
    nome: "Logística",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Cadeia de suprimentos, transporte, armazenagem, planejamento de demanda e operações."
  },
  GPI: {
    nome: "Gestão da Produção Industrial",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Planejamento e controle da produção, qualidade, Lean, indicadores e melhoria contínua."
  },
  MEC: {
    nome: "Manufatura Mecânica",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Processos de usinagem, CAD/CAM, CNC, metrologia, materiais e manufatura enxuta."
  },
  PMI: {
    nome: "Processos Metalúrgicos",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Transformação de metais: fundição, conformação, tratamentos térmicos e controle de qualidade."
  },
  POL: {
    nome: "Polímeros",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Materiais poliméricos, compósitos, processamento, reciclagem e controle de propriedades."
  },
  QUI: {
    nome: "Química",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Operações unitárias, análises laboratoriais, controle de processos e segurança química."
  },
  SIS: {
    nome: "Sistemas Biomédicos",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Manhã / Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Equipamentos médico-hospitalares: instalação, calibração, manutenção e gestão tecnológica em saúde."
  },
  GQ: {
    nome: "Gestão da Qualidade",
    duracaoAnos: 3,
    semestres: 6,
    cargaHoraria: 2400,
    periodos: "Noite (varia)",
    titulacao: "Tecnólogo",
    descricao:
      "Normas e certificações, controle estatístico de processos, auditorias e melhoria contínua."
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("cursoSelect");
  const entries = Object.entries(cursos)
    .sort((a, b) => a[1].nome.localeCompare(b[1].nome));
  for (const [codigo, info] of entries) {
    const opt = document.createElement("option");
    opt.value = codigo;
    opt.textContent = info.nome;
    sel.appendChild(opt);
  }
});
function buscarInfoCurso(codigo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const info = cursos[codigo];
      info ? resolve(info) : reject("Curso não encontrado.");
    }, 300); 
  });
}
async function selecionarCurso() {
  const select = document.getElementById("cursoSelect");
  const codigo = select.value;
  if (!codigo) return;
  if (!confirm(`Abrir informações de "${cursos[codigo].nome}"?`)) return;
  try {
    const info = await buscarInfoCurso(codigo);
    if (!cursoContadores[codigo]) cursoContadores[codigo] = createCounter(1);
    const vezes = cursoContadores[codigo]();
    const nova = window.open("", "_blank", "width=600,height=300");
    nova.document.write(`
      <html>
      <head>
        <title>${info.nome}</title>
        <meta charset="UTF-8" />
      </head>
      <body style="font-family:Arial,Helvetica,sans-serif;padding:18px;text-align:left;">
        <h2 style="margin:0 0 8px 0;">${info.nome}</h2>
        <ul style="line-height:1.6;">
          <li><b>Duração:</b> ${info.duracaoAnos} anos (${info.semestres} semestres)</li>
          <li><b>Carga horária:</b> ~${info.cargaHoraria} horas</li>
          <li><b>Períodos:</b> ${info.periodos}</li>
          <li><b>Titulação:</b> ${info.titulacao}</li>
        </ul>
        <p style="margin-top:10px;">${info.descricao}</p>
        <p style="margin-top:16px;"><i>Você abriu este curso ${vezes} vez(es) nesta sessão.</i></p>
      </body>
      </html>
    `);
  } catch (e) {
    alert("Erro ao carregar informações: " + e);
  }
}