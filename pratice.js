const turmas = [
  {
    nome: "Turma A",
    alunos: [
      { nome: "João", idade: 17 },
      { nome: "Maria", idade: 16 }
    ]
  },
  {
    nome: "Turma B",
    alunos: [
      { nome: "Lucas", idade: 18 },
      { nome: "Fernanda", idade: 17 }
    ]
  }
];

// Acessar o nome da primeira aluna da Turma B:
console.log(turmas[1].alunos[0].nome);  // "Lucas"